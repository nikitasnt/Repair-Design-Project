/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  // const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }

  // закрытие/открытие с помощью кликов
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function () {



  // закртыие и открытие модального окна кликами мыши
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal_visible');
  });



  // кнопка наверх
  var button = $('.up-button');
  button.css('display', 'none');
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function(){
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  

  // Swiper Slider для секции "Завершенные Проекты"
  var mySwiper = new Swiper ('.swiper-1-container', {
    loop: true,
    pagination: {
      el: '.swiper-1-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-1-button-next',
      prevEl: '.swiper-1-button-prev',
    },
  });

  var next = $('.swiper-1-button-next');
  var prev = $('.swiper-1-button-prev');
  var bullets = $('.swiper-1-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 13);
  bullets.css('left', prev.width() + 25);


  
  // // Swiper Slider для секции "6 шагов"
  // var mySwiper2 = new Swiper ('.swiper-2-container', {
  //   loop: true,
  //   pagination2: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //   },
  //   navigation2: {
  //     nextEl: '.swiper-2-button-next',
  //     prevEl: '.swiper-2-button-prev',
  //   },
  // });

  // var next2 = $('.swiper-2-button-next');
  // var prev2 = $('.swiper-2-button-prev');
  // var bullets2 = $('.swiper-2-pagination');

  // next2.css('left', prev2.width() + 25 + bullets2.width() + 13);
  // bullets2.css('left', prev2.width() + 25);
});