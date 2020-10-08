$( function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    icons: { "header": "section-faq__more", "activeHeader": "section-faq__more" },
  });
} )


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ui-accordion-header-icon').forEach(function (ely) {
    ely.classList.remove('ui-icon')
    ely.classList.remove('ui-icon-minus')
    ely.classList.remove('ui-icon-plus')
    // ely.classList.add('section-faq__more')
    // console.log(ely)
  })
})


var mySwiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
})


//calling a dropdown
document.querySelector('.header__nav-burger').addEventListener('click', function() {

  //fiddling with the elements of a menu
  item = document.querySelectorAll('.header-nav__item').forEach(function(eachItem) {
  eachItem.classList.toggle('is-active__item')
  })

  //moving a menu from the navbar to the outside of a page
  list = document.querySelector('.header-nav__list')
  list.classList.toggle('is-active__list-stage-1')
  console.log(list)

  //sliding a menu from the outside to the page
  window.setTimeout(function() {
    list.classList.toggle('is-active__list-stage-2')
    console.log(list)
  }, 50)
})


//closing a dropdown
window.addEventListener('click', function (event) {
  if (!event.target.matches(['.header__nav-burger', '.burger__line'])) {

    item = document.querySelectorAll('.header-nav__item').forEach(function(eachItem) {
      if (eachItem.classList.contains('is-active__item')) {
        eachItem.classList.remove('is-active__item')
        console.log(eachItem)
      }
    })

    list = document.querySelector('.header-nav__list');

    if (list.classList.contains('is-active__list-stage-2')) {
      list.classList.remove('is-active__list-stage-2');
      console.log(list)
    }

    if (list.classList.contains('is-active__list-stage-1')) {
      list.classList.remove('is-active__list-stage-1');
      console.log(list)
    }

  }
})




// document.addEventListener('DOMContentLoaded', function() {
//   window.setInterval(function() {
//     var ely = document.querySelector('.section-faq__list');
//     ely.scrollIntoView()
//   }, 100)
// })

