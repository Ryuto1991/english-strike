const runDateNode = document.querySelector("#run-date");
const todayJapaneseNode = document.querySelector("#today-japanese");
const todayMetaNode = document.querySelector("#today-meta");
const reviewListNode = document.querySelector("#review-list");
const supportCardNode = document.querySelector("#support-card");
const supportListNode = document.querySelector("#support-list");
const revealButtonNode = document.querySelector("#reveal-button");

function createReviewCard(review) {
  const article = document.createElement("article");
  article.className = "review-card";
  article.innerHTML = `
    <p class="label">${review.days_ago} day review</p>
    <p class="review-japanese">${review.japanese}</p>
    <p class="meta">${review.focus}</p>
  `;
  return article;
}

function renderSupport(today) {
  supportListNode.innerHTML = "";
  [
    "Say it in your own English first.",
    `Prepare a short, usable line for ${today.business_context}.`,
    "Check the natural, concise, and polite versions after your attempt.",
    "Then read your chosen version aloud three times.",
    "At night, mark whether you reused it in real work."
  ].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    supportListNode.appendChild(li);
  });
}

async function main() {
  const response = await fetch("/data/daily-pack.json");
  const pack = await response.json();

  runDateNode.textContent = `${pack.run_date} • ${pack.timezone}`;
  todayJapaneseNode.textContent = pack.today.japanese;
  todayMetaNode.textContent = `${pack.today.theme} • ${pack.today.focus}`;

  reviewListNode.innerHTML = "";
  pack.reviews.forEach((review) => {
    reviewListNode.appendChild(createReviewCard(review));
  });

  renderSupport(pack.today);
}

revealButtonNode.addEventListener("click", () => {
  supportCardNode.classList.remove("hidden");
});

main().catch((error) => {
  runDateNode.textContent = "Failed to load daily pack.";
  console.error(error);
});
