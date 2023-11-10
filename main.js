const list = document.querySelector(".colors");
const documentElement = document.documentElement;
const theme = localStorage.getItem("theme");
const next = document.querySelector(".next");
const back = document.querySelector(".back");

documentElement.classList = "theme-grey";
documentElement.classList.add(theme);

list.childNodes.forEach((element) => {
  console.log(element.id);
  element.addEventListener("click", () => {
    document.documentElement.classList = "";
    document.documentElement.classList.add(`theme-${element.id}-sils`);
    localStorage.setItem("theme", `theme-${element.id}-sils`);
  });
});

let slideIndex = 0;
const showSlides = (index) => {
  let slides = document.getElementsByClassName("slides");
  console.log(slides.length, index);
  if (index === slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slides[slideIndex].style.display = "block";
};
showSlides(slideIndex);

next.addEventListener("click", () => {
  slideIndex++;
  showSlides(slideIndex);
});

back.addEventListener("click", () => {
  slideIndex--;
  showSlides(slideIndex);
});

setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);
