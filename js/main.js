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
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 13);
  bullets.css('left', prev.width() + 25);



  // для срабатывания анимации при доскроллинге до элемента
  $(window).scroll(function() {
    $('.no-animated').each(function () {
        var elementPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (elementPos < topOfWindow + $(window).innerHeight()) {
            $(this).removeClass("no-animated");
        }
    });
  });



  // форма модального окна
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Email обязателен",
        email: "Email должен быть формате \"name@domain.com\""
      }
    }
  });

  // форма секции онлайн помощь
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен"
    }
  });

  // форма подвала
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 15,
        maxlength: 60
      }
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: {
        required: "Вопрос обязателен",
        minlength: "Минимальная длина вопроса длиннее 15 символов",
        maxlength: "Максимальная длина вопроса не длиннее 60 символов"
      }
    }
  });



  // маска для номера телефона
  $('[type=tel').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

});
