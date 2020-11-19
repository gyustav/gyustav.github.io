$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.nav_menu').toggleClass('navopen');
    return false;
  });
  
  /*スライドショー*/
  $('.slideshow').each(function() {
    var $sliders = $(this).find('img'),
        $slidecount = $sliders.length,
        $currentIndex = 0;
    
   $sliders.eq($currentIndex).fadeIn();
  
    
    setInterval(showNextslide, 7000);
    
    function showNextslide() {
      var $nextIndex = ($currentIndex + 1) % $slidecount;
      $sliders.eq($currentIndex).fadeOut();
      $sliders.eq($nextIndex).fadeIn();
      $currentIndex = $nextIndex;
    }
  });
  
  
  /*portfolioスライドショー*/
  
  $('.slideshows').each(function() {
    let $container =  $(this),
      $slideGroup = $container.find('.slideshows-slides'),
      $slideGroup2 = $('.slideshows2-slides'),
      $slideGroup3 = $('.slideshows3-slides'),
      $slides = $slideGroup.find('img'),
      $slides2 = $slideGroup2.find('.slides'),
      $slides3 = $slideGroup3.find('span'),
      $indicator = $container.find('.indicator'),
        currentindex = 0,
        $slideCount = $slides.length,
        $slideCount3 = $slides3.length,
        indicatorHtml='',
        duration = 500,
        interval = 7500,
        easing = 'easeInOutExpo',
        timer;
    
    

  $slides.each(function(i) {
    $(this).css({left: 100 * i + '%'});
  });
  
  $slides2.each(function(i) {
    $(this).css({top: 100 * i + '%'});
  });
    
  $slides3.each(function(i) {
    $(this).css({top: 100 * i + '%'});
  });
    
    
  function goToSlide(index) {
    $slideGroup.animate({left: -100 * index + '%'}, duration);
    currentindex = index;  //ナビ更新の為の現在ページ判別//
  }
    
  function goToSlide2(index) {
    $slideGroup2.animate({top: -100 * index + '%'}, duration);
    currentindex = index;  //ナビ更新の為の現在ページ判別//
  }
    
  function goToSlide3(index) {
    $slideGroup3.animate({top: -100 * index + '%'}, duration);
    currentindex = index;  //ナビ更新の為の現在ページ判別//
  }
    /*
   $slides3.eq(currentindex).fadeIn();
    function showNextSlide2(index) {
      $slides3.eq(currentindex).fadeOut();
      $slides3.eq(index).fadeIn();
      currentindex = index;
    }
    */
  /*
    function updateNav() {
       $indicator.find('a').removeClass('active').eq(currentindex).addClass('active');
    }
    */
   
  //インジケータークリックで該当画像へスライド//
    $('.gray').on('click', function() {
    
      goToSlide($(this).index());
      goToSlide2($(this).index());
      goToSlide3($(this).index());
    });
    
  /*
    function startTimer() {
      timer = setInterval(function() {
        let nextIndex = (currentindex + 1) % $slideCount;
        goToSlide(nextIndex);
      }, interval);
    }
    
    function stopTimer() {
      clearInterval(timer);
    }
    
    $container.on({
     mouseenter: stopTimer,   //予約だからカッコは不要//
     mouseleave: startTimer  //予約だからカッコは不要//
    });
  /*
    goToSlide(currentindex);
    */
    /*
   startTimer(); 
    */
  });
  
  

  

  
  
  
  /*
  $(window).on('load', function(){
 $('body').removeClass('is-slide');
});

 // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない

 $('a:not([href^="#"]):not([target])').on('click', function(e){
   e.preventDefault();         // ページ遷移を一旦キャンセル
   url = $(this).attr('href'); // 遷移先のURLを取得

   if (url !== '') {
   
     $('body').addClass('is-slide-in'); // 画面遷移前のアニメーション is-slide-in

     setTimeout(function () {
       window.location = url;  // 0.7秒後に取得したURLに遷移
     }, 700);
   }
   return false;
 });
*/

  
let $btn = $('.btn [data-filter]'),
      $list = $('.list [data-category]');
  $('.cafe').css('display', 'inline-block');
  $btn.on('click', function(event) {
    
    event.preventDefault();
    let $btnTxt = $(this).attr('data-filter');
    
    if($btnTxt == 'all') {
      $list.fadeOut().promise().done(function() {
        $list.fadeIn();
      });
    } else {
      $list.fadeOut().promise().done(function() {
        $list.filter('[data-category = "' + $btnTxt + '"]').fadeIn();
       
      });
    }
  });
  
  /*トップページのナビゲーションswtch*/
  $('.menu a').on('click', function() {
    console.log('aaa');
    $('.mainpage_right a').css('background-color', '#DDDDDD');
    $(this).css('background-color', 'black');
  });
  
  /*ふわっと要素*/
  $(window).on('load scroll', function() {
   $('.show').each(function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);
      var objTop= $(this).offset().top;
      var objBottom=$(this).outerHeight();
      var objheight= objTop + objBottom;
      if(objTop < scrollPos) {
         $(this).addClass('show_object');
       
      } else {
         $(this).removeClass('show_object');
      }
   });
    
    
   /*fashionふわっと*/
  $('.show-nor0').each(function() {
    
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.3);
      var objTop= $(this).offset().top;
      var objBottom=$(this).outerHeight();
      var objheight= objTop + objBottom;
      if(objTop < scrollPos) {
        
   
       $('.titlestart_s').addClass('changespan');
        $('.titlestart_a').addClass('changehover');
      } else {
        
        $('.titlestart_s').removeClass('changespan');
        $('.titlestart_a').removeClass('changehover');
      }
   });
    
  $('.show-nor1').each(function() {
    
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.3);
      var objTop= $(this).offset().top;
      var objBottom=$(this).outerHeight();
      var objheight= objTop + objBottom;
      if(objTop < scrollPos) {
        
    $('.bl3-s').addClass('changespan1');
      $('.fashion-left a').addClass('changehover');
       
      } else {
        $('.fashion-left a').removeClass('changehover');
        $('.bl3-s').removeClass('changespan1');
        
      }
   });
    
  if (window.matchMedia( "(min-width: 481px)" ).matches) {
  $('.show-nor2').each(function() {
    
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.3);
      var objTop= $(this).offset().top;
      var objBottom=$(this).outerHeight();
      var objheight= objTop + objBottom;
      if(objTop < scrollPos) {
        
   $(this).find('span').addClass('changespan1');
    $(this).find('a').addClass('changehover');
       
      } else {
        $(this).find('a').removeClass('changehover');
        $(this).find('span').removeClass('changespan1');
        
      }
   });
  }
});
  
  
  /*ポートフォリオオーヴァーレイ*/
  $('.thum').on('click', function() {
  
   $('.overlay4').addClass('open');
   
  });
  $('.close').on('click', function() {
    $('.overlay4').removeClass('open');
  });
  
  $('.mainimg').on('click', function(Event) {
    Event.stopPropagation();
  });
  
  
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position + 1}, speed, "swing");
    
    /*
     $('.menu_nav').find('li').css('background-color', 'transparent');
    
    $(this).parent().css('background-color', 'black');
    */
  
    return false;
    
  });
  
 /*fashion*/
  /*
  $(window).scroll(function() {
    let scrollTop= $(window).scrollTop();
    let objTop= $('.msg1').offset().top;
    let objBottom=$('.msg1').outerHeight();
    let objheight= objTop + objBottom;
    
    if(scrollTop >= objTop && objheight >= scrollTop) {
    
    $('.nav_msg1').css('background-color', 'black');
    
    } else {
      $('.nav_msg1').css('background-color', '');
    }
  });
  
   $(window).scroll(function() {
    let scrollTop= $(window).scrollTop();
    let objTop= $('.msg2').offset().top;
    let objBottom=$('.msg2').outerHeight();
    let objheight= objTop + objBottom;
    
    if(scrollTop >= objTop && objheight >= scrollTop) {
      
    $('.nav_msg2').css('background-color', 'black');
    } else {
      $('.nav_msg2').css('background-color', '');
    }
  });
  
  $(window).scroll(function() {
    let scrollTop= $(window).scrollTop();
    let objTop= $('.msg3').offset().top;
    let objBottom=$('.msg3').outerHeight();
    let objheight= objTop + objBottom;
    
    if(scrollTop >= objTop && objheight >= scrollTop) {
      
    $('.nav_msg3').css('background-color', 'black');
    
      
    } else {
      $('.nav_msg3').css('background-color', '');
    }
  });
  
  $(window).scroll(function() {
    let scrollTop= $(window).scrollTop();
    let objTop= $('.msg4').offset().top;
    let objBottom=$('.msg4').outerHeight();
    let objheight= objTop + objBottom;
    
    if(scrollTop >= objTop && objheight >= scrollTop) {
      
    $('.nav_msg4').css('background-color', 'black');
  
      
    } else {
      $('.nav_msg4').css('background-color', '');
    }
  });
  */
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
  
/*ナビゲーションメニューのクローズスイッチ*/
/*
$('.nav_opentab').on('click', function() {
  $('.fashion-menu_nav').toggleClass('nav-close');
});
  */

/*portfolioのナビゲーション*/
  $('.menu__single').on('click', function() {
    
    console.log('aaa');
    
    $('#category_btn a').css('background-color', '#DDDDDD');
    $(this).find('> a').css('background-color', 'black');
    return false;
  });
  
  $('.menu__second-level').find('li').on('click', function() {
    $('#category_btn a').css('background-color', '#DDDDDD');
    $(this).parents('.menu__single').find('> a').css('background-color', 'black');
    $(this).find('> a').css('background-color', 'black');
  })
  
  $('.menu__second-level').find('li').on('click', function(Event) {
    Event.stopPropagation();
  });
  
  
});

let thumbs = document.querySelectorAll('.thum');
thumbs.forEach(function(item, index) {
  item.addEventListener('click', function() {
    document.querySelector('.mainimg').src = this.dataset.img;
  });
});


var sliderControl = document.querySelector(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;

sliderControl.addEventListener("click", function(e){
  target = e.target;
  
  // get next button
  if(target.classList.contains("next")){

    next = e.target,
    prev = next.previousElementSibling,
    nextSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");
    
    slideCurrent += 1;
    
    if(slideCurrent > 0) {
      prev.classList.remove("disabled");
    }
    
    if(slideCurrent === slidesLength - 1){
      next.classList.add("disabled");
    }
  }
  
  // get prev button
  if(target.classList.contains("prev")){
    
    slideCurrent -= 1;
    
    prev = e.target,
    next = prev.nextElementSibling,
    prevSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");
    
    if(slideCurrent === slidesLength - 2){
      next.classList.remove("disabled");
    }

    if(slideCurrent === 0){
      prev.classList.add("disabled");
    }
    
  }

});

balapaCop("Image Slider", "#999");
