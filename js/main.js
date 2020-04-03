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
  $(window).on('keyup', function(e) {
    if (e.keyCode == 27) {
      modal.removeClass('modal_visible');
    }
  });
  modal.on('click', function(e){
    if ($(e.target).removeClass('modal_visible')) {
        // клик внутри элемента 
        return;
    }
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
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 13)
  bullets.css('left', prev.width() + 25)
});