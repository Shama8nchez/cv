const items = document.querySelectorAll('.experience__content_item');

items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const title = item.querySelector('.experience__content_title');
    title.classList.add('experience__content_title-active');
  });

  item.addEventListener('mouseout', () => {
    const title = item.querySelector('.experience__content_title');
    title.classList.remove('experience__content_title-active');
  });
});

const certPre = document.getElementById('cert-pre');
const certFE = document.getElementById('cert-fe');
const popup = document.querySelector('.popup');
const certContainer = document.querySelector('.certificate_container');

certPre.addEventListener('click', () => {
  popup.classList.add('popup-active');
  certContainer.innerHTML = '<img src="./img/cert1.JPG" alt="certificate" class="certificate">';
});

certFE.addEventListener('click', () => {
  popup.classList.add('popup-active');
  certContainer.innerHTML = '<img src="./img/certfe.JPG" alt="certificate" class="certificate">';
});

popup.addEventListener('click', (e) => {
  const cert = document.querySelector('.certificate')
  if (e.target !== cert) {
    popup.classList.remove('popup-active');
  }
});
