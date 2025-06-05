$(function(){
//탭메뉴
  $(".tabmenu li").click(function(){
    let i = $(this).index();
    
    $(".tabmenu li").removeClass('on');
    $(this).addClass('on');

    $(".tabconbox .tabcon").hide();
    $(".tabconbox .tabcon").eq(i).show();

    return false;
  });





/////////
});