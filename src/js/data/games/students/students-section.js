import { students } from './data_students.js';

export const ourTeam = () => {
  const gameContainer = document.querySelector('.game-id_10');
  const gameHtml = `
 <h3 class="div_title" >Наша команда</h3>
 <div class="students_swiper">
          <ul class="swiper-wrapper">
          ${students
            .map(student => {
              return ` <li class="swiper-slide">
              <div class="student"> 
              <div class="students_photo">
         <img class="students_img" src="${student.photo}" alt="${student.name}"></div>
        <p class="students_name">${student.name}</p>
        <p class="students_description">${student.description}</p></div>
            </li>`;
            })
            .join('')}
           
          </ul>
       
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
    
          <div class="swiper-pagination"></div>
        </div>
  `;
  gameContainer.innerHTML = gameHtml;

  const studentsSwiper = document.querySelector('.students_swiper');

  const swiper = new Swiper('.students_swiper', {
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: ['-100%', 0, 0],
        scale: 0.5,
      },
      next: {
        translate: ['100%', 0, 0],
        scale: 0.5,
      },
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
};
