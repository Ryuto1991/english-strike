export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    const response = await fetch(env.DAILY_PACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${env.DAILY_PACK_WEBHOOK_TOKEN}`
      },
      body: JSON.stringify({
        source: "cloudflare-cron",
        cron: event.cron,
        scheduled_time: event.scheduledTime
      })
    });

    ctx.waitUntil(response.text());
  }
};
