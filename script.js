const radioBtns = document.querySelectorAll(".radio_container");

function toggleActive(element) {
  radioBtns.forEach((btn) => btn.classList.remove("clicked"));
  element.classList.add("clicked");
}

radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => toggleActive(btn))
})