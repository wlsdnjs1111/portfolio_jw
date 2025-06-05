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



//1. 더보기버튼1
$('.box').slice(0, 8).show(); // 처음 8개만 보이게
$('.m_btn1').click(function () {
  $('.box:hidden').slice(0, 4).fadeIn(); // 4개씩 추가 표시
  if ($('.box:hidden').length == 0) {
    $('.m_btn1').hide(); // 다 보여주면 버튼 숨김
  }
});

//2. 더보기버튼2
$('.conitem').slice(0, 3).css('display', 'flex'); // 처음 3개만 보이기
$('.m_btn2').click(function () {
  $('.conitem:hidden').slice(0, 1).css('display', 'flex').hide().fadeIn();
    if ($('.conitem:hidden').length === 0) {
      $('.m_btn2').hide();
    }
});


//3. 더보기 버튼3
$('.cbox').slice(0, 12).show(); 
$('.m_btn3').click(function () {
  $('.cbox:hidden').slice(0, 4).fadeIn(); 
    if ($('.cbox:hidden').length == 0) {
      $('.m_btn3').hide(); 
    }
});




/////
});