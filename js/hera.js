$(document).ready(function(){

  //-------------------헤더 스크롤 이벤트
  $(window).scroll(function(){
    const height = $(window).scrollTop();
    if(height >= 100){
      $('.logo,.header,.hamburger,.hamburger span,.mobile-menu').addClass('scroll')
    }else{
      $('.logo,.header,.hamburger').removeClass('scroll')
    }
    

  });

  
//----------------swiper1
    var swiper = new Swiper(".fristSwiper", {
        slidesPerView:1,
        spaceBetween:10,
        loop:true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
        autoplay:{
          delay:2000,
          speed:10,
          
        },

      //-------------------aos  
    });
    let ww = $(window).width();
    if(ww >= 1450){
      AOS.init({
        duration: 1200,
        disable: 'tablet'
       });
    }else{

    }
      
//------------------------swipre2

     var swiper = new Swiper(".secondSwiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        1001: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        655: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });
//----------------sec2 hover
$('.sec2-box img').mouseenter(function(){
  $(this).addClass('active')
  $('.sec2-txt').addClass('active')
  $(this).parents().siblings().children().removeClass('active');
  
});


$('.sec2-box img').mouseleave(function(){
  $(this).removeClass('active')
  $('.sec2-txt').removeClass('active')
});
//---------------sec3 hover
 $('.sec3-box1 img').mouseenter(function(){
  $(this).addClass('active')
 });
 $('.sec3-box1 img').mouseleave(function(){
  $(this).removeClass('active')
 });

 //------------------data-alt호출-------------------
 $('.menu li').mouseenter(function(){
    let result = $(this).attr('data-alt'); //변수에 저장하여 데이터값 불러오기
    $('.sub-menu').addClass('active');  
    // 수정 -> sub-menu-detail active제거는 addClass 추가하기전에 전체적으로 제거해주게끔 지정
    $('.sub-menu-detail').removeClass('active');
    $(`#${result}`).addClass('active');
    // $(`#${result}`).siblings().removeClass('active')

  
});
$('.sub-menu').mouseleave(function(){
  $(this).removeClass('active');
  // $('.sub-menu-detail').removeClass('.active')
  $('.sub-menu-detail').removeClass('active');
});  
//------ham------
$('.hamburger').click(function(){
  $('.hamburger span').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

//----------mobile-submenu
$('.mobile-click').click(function(){
  $(this).siblings('.mobile-txt').toggleClass('active');
  $(this).parents('.mobile-list').siblings().children('.mobile-txt').removeClass('active');
});


$('.m-sub').click(function(){
  $(this).siblings('.m-sub-list').toggleClass('active')
  $(this).parents('.fusion').siblings().children('.m-sub-list').removeClass('active');
});


//---------------mobile-footer
$('.mf1').click(function(){
  
  $('.mf2').toggleClass('active');
  $('.mobile-footer').toggleClass('active')
});

var swiper = new Swiper(".secondSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:2000,
    speed:10,
    
  },
  breakpoints:{
    1401: {
      slidesPerView: 8,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    430: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }

  
});



});

