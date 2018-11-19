// ここからコードを書く
$(function(){
  $("#text").fadeIn(4000);

  $('span').click(function(){
    if($('.mobile-menu-wrapper').hasClass('open')){
      $('.mobile-menu-wrapper').removeClass('open');
      $('.mobile-menu-wrapper').slideUp(300);
      $('header').css('background-color','rgba(31, 31, 31, 0.45)');
      $(this).html('<i class="fas fa-bars"></i>');
    }else {
      $('.mobile-menu-wrapper').addClass('open');
      $('.mobile-menu-wrapper').slideDown(300);
      $('header').css('background-color','rgba(0, 0, 0, 0.7)');
      $(this).html('<i class="fas fa-times"></i>');

    };
  });
});
