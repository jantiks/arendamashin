const navSlide = () => {
   const hamburger = document.querySelector(".hamburger");
   const nav = document.querySelector(".navbar-items");
   hamburger.addEventListener("click", () => {
      nav.classList.toggle("navbar__active");
      hamburger.classList.toggle("hamburger__active");
   });
}
navSlide();