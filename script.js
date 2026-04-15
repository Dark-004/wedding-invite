const cover = document.getElementById("cover");
const card = document.getElementById("card");

cover.addEventListener("click", () => {
  cover.classList.add("open");

  setTimeout(() => {
    cover.style.display = "none";
    card.style.display = "block";
  }, 1000);
});
function openMap() {
  window.open("https://maps.google.com?q=Appoos+Auditorium+Perumbavoor", "_blank");
}
