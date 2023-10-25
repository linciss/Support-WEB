const list = document.querySelector('.colors');

onload = () => {
  document.documentElement.classList.add('theme-grey');
};

list.childNodes.forEach((element) => {
  console.log(element.id);
  element.addEventListener('click', () => {
    document.documentElement.classList = '';
    document.documentElement.classList.add(`theme-${element.id}`);
  });
});
