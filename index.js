const hamburgerButton = document.querySelector('.menu-phone');
const nav = document.querySelector('.nav-wrapper');
const closeBtn = document.querySelector('.close-menu');
const ancreLinks = nav.getElementsByTagName('a');

const theModal = document.querySelector('#myModal');
const closeModal = document.querySelector('.closeModal');
const worksSection = document.querySelector('.work-container');

const data = [
  {
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
    mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
    fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
    Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
    odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
    maiores molestias repudiandae natus provident.`,
    featuredImage: './image/snapshoot.png',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '',
    linkToSource: '',
    cardNo: '#first-card',
  },
  {
    name: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
    mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
    fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
    Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
    odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
    maiores molestias repudiandae natus provident.`,
    featuredImage: './image/snapshoot-1.png',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '',
    linkToSource: '',
    cardNo: '#second-card',
  },
  {
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
    mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
    fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
    Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
    odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
    maiores molestias repudiandae natus provident.`,
    featuredImage: './image/snapshoot-2.png',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '',
    linkToSource: '',
    cardNo: '#third-card',
  },
  {
    name: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
    mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
    fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
    Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
    odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
    maiores molestias repudiandae natus provident.`,
    featuredImage: './image/snapshoot-3.png',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '',
    linkToSource: '',
    cardNo: '#fourth-card',
  },
];

let html = '';

data.forEach((item) => {
  html += `
  <div class="box" id="${item.cardNo}">
    <img src="${item.featuredImage}" alt="image card" class="snapshot">
    <div class="more-details">
      <div class="work-description-align-item">
        <div class="works-elements">
          <h1 class="project-title"> ${item.name} </h1>
          <h2>
            <div class="frame-client">
            <span class="client"> CANOPY </span>
            <img src="./image/Counter.png" alt="image card" class="counter">
            <span class="role"> Back End Dev </span>
            <img src="./image/Counter.png" alt="image card" class="counter">
            <span class="year"> 2015 </span>
            </div>
          </h2>
        </div>
      </div>
      <span class="details"> ${item.shortDescription} </span>
      <ul class="technologie-label">
        ${item.technologies.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
      <button class="see-project" type="button"> See Project </button>
    </div>
  </div>`;
});

worksSection.innerHTML = html;

const projectButton = document.querySelectorAll('.see-project');

projectButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('#myModal');
    const title = modal.querySelector('.project-title');
    const img = modal.querySelector('img.snapshotModal');
    const details = modal.querySelector('.details-modal');
    const technologie = modal.querySelector('.technologie-label');

    title.textContent = data[index].name;
    img.src = data[index].featuredImage;
    details.textContent = data[index].description;
    technologie.innerHTML = data[index].technologies.map((item) => `<li>${item}</li>`).join('');

    modal.style.display = 'block';
  });
});

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

closeModal.addEventListener('click', () => {
  theModal.style.display = 'none';
});