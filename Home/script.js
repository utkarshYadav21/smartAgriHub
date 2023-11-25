const closeModal = document.querySelector(".close-modal");
const bell = document.querySelector(".bell");
const popUp = document.querySelector(".pop-up");
closeModal.addEventListener("click", function () {
  popUp.classList.add("hidden");
});
bell.addEventListener("click", () => {
  if (popUp.classList.contains("hidden")) popUp.classList.remove("hidden");
  else popUp.classList.add("hidden");
});
// window.addEventListener('scroll', function () {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 5) {
//       navbar.classList.add('scrolled');
//   } else {
//       navbar.classList.remove('scrolled');
//   }
// });


