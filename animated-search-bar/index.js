const searchBarContainer = document.querySelector(".search-bar-container");

const ClickEvent = document.querySelector(".magnifier");

ClickEvent.addEventListener("click", () => {
  searchBarContainer.classList.toggle("active");
});
