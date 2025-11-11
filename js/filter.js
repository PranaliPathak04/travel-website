document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter-bar select");
  const cards = document.querySelectorAll(".destination-card");

  filters.forEach(select => {
    select.addEventListener("change", () => {
      filterCards();
    });
  });

  function filterCards() {
    const [continent, type, budget] = Array.from(filters).map(f => f.value);

    cards.forEach(card => {
      const matchContinent = !continent || card.dataset.continent === continent;
      const matchType = !type || card.dataset.type === type;
      const matchBudget = !budget || card.dataset.budget === budget;

      if (matchContinent && matchType && matchBudget) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
