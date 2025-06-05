$(function(){
//좋아요,스크랩 버튼
let num = 0; //초기화

$(".like img").click(function(){
if(num == 0){
  $(this).attr("src","../img/main/loveicon.png");
  num = 1; //==를 넣으면 안됨 
}else{
  $(this).attr("src","../img/main/loveicon01.png");
  num = 0;
}
});

$(".scrap img").click(function(){
if(num == 0){
  $(this).attr("src","../img/main/scrapicon.png");
  num = 1; //==를 넣으면 안됨 
}else{
  $(this).attr("src","../img/main/scrapicon01.png");
  num = 0;
}
});


//더보기 버튼1
$('.conitem').slice(0, 3).css('display', 'flex'); // 처음 3줄만 보이기
$('.more1').click(function () {
  $('.conitem:hidden').slice(0, 1).css('display', 'flex').hide().fadeIn();
    if ($('.conitem:hidden').length === 0) {
      $('.more1').hide();
    }
});

//더보기 버튼2
$('.conitem2').slice(0, 3).css('display', 'flex'); // 처음 3줄만 보이기
$('.more2').click(function () {
  $('.conitem2:hidden').slice(0, 1).css('display', 'flex').hide().fadeIn();
    if ($('.conitem2:hidden').length === 0) {
      $('.more2').hide();
    }
});




///////
});