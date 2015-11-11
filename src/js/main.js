/*
 * Third party
 */

 //= partials/jquery-2.1.4.min.js
 //= partials/jquery.color.min.js
 //= partials/jquery.animateNumber.min.js

/*
 * Custom
 */


$(document).ready(function() {
    /* calculator.html
    -----------------------------------------------------------------------------*/

  $(".callback-label").click(function(){
     $('.callback-img').toggle("fast");
  });

  $(".call-request-label").click(function(){
     $('.call-request-img').toggle("fast");
  });

  $(".search-label").click(function(){
   $('.search-img').toggle("fast");
  });

  $(".photo-gallery-label").click(function(){
   $('.gallery-img').toggle("fast");
  });

  $(".online-advise-label").click(function(){
   $('.online-advise-img').toggle("fast");
  });

  $(".item-catalog-label").click(function(){
   $('.catalog-img').toggle("fast");
  });   

  $(".basket-label").click(function(){
   $('.basket-img').toggle("fast");
  });

  $(".social-label").click(function(){
   $('.social-img').toggle("fast");
  });

  $(".slider-label").click(function(){
   $('.slider-img').toggle("fast");
  });

  $(".news-label").click(function(){
   $('.news-img').toggle("fast");
  });

  $(".banner-label").click(function(){
   $('.banner-img').toggle("fast");
  });

  $(".audio-label").click(function(){
   $('.audio-img').toggle("fast");
  });

  $(".video-label").click(function(){
   $('.video-img').toggle("fast");
  });

  $(".private-office-label").click(function(){
   $('.cabinet-img').toggle("fast");
  });

  $(".blog-label").click(function(){
   $('.blog-img').toggle("fast");
  });

  $(".forum-label").click(function(){
   $('.forum-img').toggle("fast");
  });

  $(".robo-label").click(function(){
   $('.robo-img').toggle("fast");
  });

  $(".uniq-label").click(function(){
   $('.uniq-img-wr').toggle("fast");
  });

  hideAll();
  calc();
  var priceResult = 0;
  var countValue = 0;

$(".type-site").change(function(){
  if($(this).val() == 0) hideAll();
  if($(this).val() == 1) toggleFormOne();
  if($(this).val() == 2) toggleFormTwo();
  if($(this).val() == 3) toggleFormThree();
  if($(this).val() == 4) toggleFormFour();
  if($(this).val() == 5) toggleFormFive();
  //alert($(this).val()); /* debug */
});

function hideAll() {
  $('.select-site-visit').hide();
  $('.select-landing-page').hide();
  $('.select-corp-site').hide();
  $('.select-present-site').hide();
  $('.select-e-shop').hide();
  $('.starter-img-wr').hide();
  $('.calc-section').hide();

  $("input[type=checkbox]").removeAttr("checked");
  changeNumber(0);
  $('.callback-img').hide();
  $('.call-request-img').hide();
  $('.search-img').hide();
  $('.gallery-img').hide();
  $('.online-advise-img').hide();
  $('.catalog-img').hide();
  $('.basket-img').hide();
  $('.social-img').hide();
  $('.slider-img').hide();
  $('.news-img').hide();
  $('.banner-img').hide();
  $('.audio-img').hide();
  $('.video-img').hide();
  $('.cabinet-img').hide();
  $('.blog-img').hide();
  $('.forum-img').hide();
  $('.robo-img').hide();
  $('.uniq-img-wr').hide();
  $(".calc-item input[type=checkbox]:checked").css("background", "url(../img/main-content/block-2/checkbox-uncheck.png) no-repeat 50% 50%")
}

function toggleFormOne() {
  hideAll();
  changeNumber(9780);
  $('.select-site-visit').toggle("fast");
  $('.calc-section').toggle();
  $('.starter-img-wr').toggle();

}

function toggleFormTwo() {
  hideAll();
  changeNumber(16800);
  $('.select-landing-page').toggle("fast");
  $('.calc-section').toggle();
  $('.starter-img-wr').toggle();
}

function toggleFormThree() {
  hideAll();
  changeNumber(27780);
  $('.select-corp-site').toggle("fast");
  $('.calc-section').toggle();
  $('.starter-img-wr').toggle();
}

function toggleFormFour() {
  hideAll();
  changeNumber(33380);
  $('.select-present-site').toggle("fast");
  $('.calc-section').toggle();
  $('.starter-img-wr').toggle();
}

function toggleFormFive() {
  hideAll();
  changeNumber(57180);
  $('.select-e-shop').toggle("fast");
  $('.calc-section').toggle();
  $('.starter-img-wr').toggle();
}
var checkedListPrice = 0;
function changeNumber(countValue) {
  if (countValue){
    checkedListPrice = countValue;
  }
    //обнуляем цену каждый раз при выделении чекбокса
    priceResult = checkedListPrice;
    //перебираем блок
    $(".calc-item").each(function(index){
      //если выделен чекбокс
      if ($( this ).children("input").prop("checked") == true ){  
        //прибавляем цену
        priceResult = priceResult + parseInt($( this ).children("label").children(".calc-price").html());
        
      }
    });
     //анимируем число
     $('.barrel-number').animateNumber(
    {
      number: priceResult * decimal_factor,

      numberStep: function(now, tween) {
      var floored_number = Math.floor(now) / decimal_factor,
        target = $(tween.elem);
      if (decimal_places > 0) {
        floored_number = floored_number.toFixed(decimal_places);
      }
      //текст в поле цены
      target.text(floored_number + ' руб');
      }
    },//скорость прибавления
    300
    );
   } // close changeNumber

  var decimal_places = 0;
  var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
  function calc() {
     //для анимации не целых чисел должно быть > 0

  
  //итоговая цена
 

  //перебираем все элементы с чекбоксами
  $(".calc-item").each(function(index){
  //добавляем каждому функцию при изменении с false на true: прибавляет общую цену
  $( this ).children("input").change(function(){
    changeNumber();
  });
  });

  }




















});