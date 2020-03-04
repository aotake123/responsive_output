$(function(){

  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

  //SPメニューの展開後のリンクを押した際に戻す操作
  $('.js-toggle-menu-link').on('click', function(){
    $('.js-toggle-sp-menu').removeClass('active');
    $('html').removeClass('p-header__naviMenu-wrap');
    $('.js-toggle-sp-menu-target').removeClass('active');
  });

});