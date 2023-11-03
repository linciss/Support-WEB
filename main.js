const list = document.querySelector(".colors");
const documentElement = document.documentElement;
const theme = localStorage.getItem("theme");

documentElement.classList = "theme-grey";
documentElement.classList.add(theme);

list.childNodes.forEach((element) => {
  console.log(element.id);
  element.addEventListener("click", () => {
    document.documentElement.classList = "";
    document.documentElement.classList.add(`theme-${element.id}`);
    localStorage.setItem("theme", `theme-${element.id}`);
  });
});
