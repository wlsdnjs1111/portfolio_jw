$(document).ready(function () {
  //메인슬라이드
    let slideCount = $('.slidebox ul li').length; //슬라이드개수
    let slideWidth = $(window).width(); //픽셀단위로 변환

    $('.slidebox ul').css({ width: slideWidth * slideCount});
    $('.slidebox ul li').css({ width: slideWidth});

    function slide() {
        $('.slidebox ul').animate({ left: -slideWidth }, 1000, function () {
           $('.slidebox ul').append($('.slidebox ul').find('li').first()); // 첫 번째 li를 맨 뒤로
            $('.slidebox ul').css({ left: 0 }); 
        });
    }
    setInterval(slide, 4000); 


//section01 실외장소(베스트)
const $swipe = $('.swipe'); 
const $box = $('.box');   
const showNumBest = 4; 
const totalBest = $box.length; 
const boxWidthBest = $box.outerWidth(true) + 10; // 한 칸의 너비 (아이템 너비 + 마진)

let currentStepBest = 0; // 현재 스크롤 단계 (버튼이 눌린 횟수와 연관)

function updateBestButtons() {
  const $container = $swipe.parent(); //부모 컨테이너 (overflow: hidden 처리된 부분)

  // .swipe 요소의 실제 스크롤 가능한 전체 너비
  // get(0).scrollWidth : 요소의 내용물 전체 너비를 반환하여 정확한 스크롤 범위를 파악
  const swipeScrollWidth = $swipe.get(0).scrollWidth;
  // 컨테이너(보여지는 영역)의 너비
  const containerWidth = $container.width();

  // 실제 스크롤해야 하는 최대 거리 (컨텐츠 전체 너비 - 보여지는 영역 너비)
  // 컨테이너가 컨텐츠보다 넓을 경우 스크롤 거리는 0이 되어야 하므로 Math.max 사용
  const maxScrollDistance = Math.max(0, swipeScrollWidth - containerWidth);

  // 현재 단계에 따른 목표 스크롤 위치 계산 (왼쪽에서부터 얼마나 이동했는지)
  let targetScrollPosition = currentStepBest * boxWidthBest;

  // 목표 스크롤 위치가 최대 스크롤 거리를 넘지 않도록 보정 (중요!)
  targetScrollPosition = Math.min(targetScrollPosition, maxScrollDistance);

  // 스크롤 위치는 0보다 작아질 수 없으므로 보정
  targetScrollPosition = Math.max(0, targetScrollPosition);

  $swipe.css('transform', `translateX(${-targetScrollPosition}px)`);

  if (currentStepBest <= 0) {
    $('.arrow.pre').addClass('disabled');
  } else {
    $('.arrow.pre').removeClass('disabled');
  }

  // 부동 소수점 오차를 감안하여 작은 오차 범위(예: 0.5px)를 허용
  if (targetScrollPosition >= maxScrollDistance - 0.5) {
    $('.arrow.next').addClass('disabled');
  } else {
    $('.arrow.next').removeClass('disabled');
  }
}

  $('.arrow.pre').click(function () {
    // 현재 단계가 0보다 커야 왼쪽으로 이동 가능
    if ( currentStepBest > 0) {
      currentStepBest--; 
      updateBestButtons(); 
    }
  });

  $('.arrow.next').click(function () {
    const $container = $swipe.parent();
    const swipeScrollWidth = $swipe.get(0).scrollWidth;
    const containerWidth = $container.width();
    const maxScrollDistance = Math.max(0, swipeScrollWidth - containerWidth); // 최대 스크롤 거리 다시 계산

    // 다음 단계로 이동했을 때의 예상 스크롤 위치 (캡 적용 전)
    const potentialNextScrollPosition = (currentStepBest + 1) * boxWidthBest;

    // 다음 단계로 이동했을 때의 예상 스크롤 위치 (캡 적용 후)
    const potentialNextActualScrollPosition = Math.min(potentialNextScrollPosition, maxScrollDistance);

    // 현재 실제 스크롤 위치 (캡 적용 후)
     const currentActualScrollPosition = Math.min(currentStepBest * boxWidthBest, maxScrollDistance);

    // 오른쪽으로 더 스크롤할 공간이 남아 있다면
    // 작은 오차 범위(예: 0.5px)를 사용하여 비교
    if (potentialNextActualScrollPosition > currentActualScrollPosition + 0.5) {
      currentStepBest++; 
      updateBestButtons(); 
    }
  });

updateBestButtons();


// section01 실내장소
$(function () {
  const $inswipe = $('.inswipe');
  const $inbox = $('.inbox');
  const showNum = 3; 
  const total = $inbox.length;
  const boxWidth = $inbox.outerWidth(true);
  const maxIndex = total - showNum;

  let inside = 0;

  function insideButtons() {
    if (inside <= 0) {
      $('.inarrow.inpre').addClass('disabled');
    } else {
      $('.inarrow.inpre').removeClass('disabled');
    }
    if (inside >= maxIndex) {
      $('.inarrow.innext').addClass('disabled');
    } else {
      $('.inarrow.innext').removeClass('disabled');
    }
  }

  $('.inarrow.inpre').click(function () {
    if (inside > 0) {
      inside--;
      $inswipe.css('transform', `translateX(-${boxWidth * inside}px)`);
      insideButtons();
    }
  });

  $('.inarrow.innext').click(function () {
    if (inside < maxIndex) {
      inside++;
      $inswipe.css('transform', `translateX(-${boxWidth * inside}px)`);
      insideButtons();
    }
  });

  insideButtons();
});



//section3(코스추천)
  //버튼 클릭시 코스별로 나타내기
$('#sec03 .btn1').on('click', function() {
  showCourse(1);
});
$('#sec03 .btn2').on('click', function() {
  showCourse(2);
});
$('#sec03 .btn3').on('click', function() {
  showCourse(3);
});
$('#sec03 .btn4').on('click', function() {
  showCourse(4);
});
$('#sec03 .btn5').on('click', function() {
  showCourse(5);
});

//슬라이드
let upSlidetime = null;

function showCourse(num) {

  $('#sec03 .course_img > div').hide();
  $('#sec03 .course_img .cos' + num).show();

  let $slideBox = $('#sec03 .course_img .cos' + num + ' .cosbox');
  let upSlideheight = $slideBox.find('li').height();

  if (upSlidetime) {
    clearInterval(upSlidetime); //기존 슬라이드 멈추기
  }

  function upSlide() { //슬라이드 함수
    $slideBox.stop(true,true).animate({ top: -upSlideheight }, 1000, function() {
      $(this).append($(this).find('li').first()).css({ top: 0 });
    });
  }

  if ($slideBox.find('li').length > 1) {
    upSlidetime = setInterval(upSlide, 3000);
  }
}



//section04(탭메뉴)
  $(".tabmenu li").click(function(){
    let i = $(this).index();
    
    $(".tabmenu li").removeClass('on');
    $(this).addClass('on');

    $(".tabcon").hide();
    $(".tabcon").eq(i).show();

    return false;
  });



//좋아요버튼
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
    num = 1;
  }else{
    $(this).attr("src","../img/main/scrapicon01.png");
    num = 0;
  }
});


//////////
});