const hamburgerButton = document.querySelector('.menu-phone');
const nav = document.querySelector('.nav-wrapper');
const closeBtn = document.querySelector('.close-menu');
const ancreLinks = nav.getElementsByTagName('a');

hamburgerButton.addEventListener('click', () => {
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});

for (let i = 0; i < ancreLinks.length; i += 1) {
  ancreLinks[i].addEventListener('click', () => {
    nav.classList.remove('open');
  });
}