$(function(){
    gsap.registerPlugin(SplitText, ScrollTrigger);

  //첫문장
  let split = SplitText.create(".word",{
    type: "chars,words",
    linesClass:"line",
    wordsClass:"word",
    charsClass:"chars",
  });
  gsap.from(split.chars,{
    y:100,
    autoAlpha:0,
    stagger: {
      amount: 0.7,
      from: "random"
    }
  });
  
  //어바웃미
  gsap.timeline({
    scrollTrigger:{
    trigger:'.about',
    start:'20% 90%',
    end:'center 90%',
    scrub:2,
    //markers:true
    }
  })
  .to('.about .intro',{y: '-200px', duration:1, ease:'none'},0.2)


  //타임라인
  gsap.timeline({
    scrollTrigger:{
    trigger:'.timeline',
    start:'20% 90%',
    end:'center 90%%',
    scrub:2,
    //markers:true
    }
  })
  .to('.timeline',{x: '100px', duration:1, ease:'none'},0.2)


  //사진겹치기
    gsap.timeline({
    scrollTrigger:{
      trigger:'.pic',
      start:'5% 0%', 
      end:'50% 100%',
      scrub: 6,
      //markers:true
      }
    })
    .fromTo('.picbox ul .a',{y:'250%'},{y:'0'}, 1.0)
    .fromTo('.picbox ul .b',{y:'250%'},{y:'0'}, 1.3)
    .fromTo('.picbox ul .c',{y:'250%'},{y:'0'}, 1.6)
    .fromTo('.picbox ul .d',{y:'250%'},{y:'0'}, 1.9)
    .fromTo('.picbox ul .e',{y:'250%'},{y:'0'}, 2.1)
    .fromTo('.picbox ul .f',{y:'250%'},{y:'0'}, 2.4)
    .fromTo('.picbox ul .g',{y:'250%'},{y:'0'}, 2.7)


  //project 배열
  gsap.utils.toArray('.project .pro1 .p_item').forEach((selector)=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:selector,
        start:'80% 60%',
        end:'0% 0%',
        scrub:1,
        //markers:true
      }
    })
    .to(selector,{transform:'rotateX(-10deg) scale(0.9)',
      transformOrigin:'top',filter:'brightness(0.5)'},0)
  });

//pro2,3,4
  gsap.timeline({
    scrollTrigger:{
    trigger:'.pro2',
    start:'0% 90%',
    end:'center 90%',
    scrub:2,
    //markers:true
    }
  })
  .to('.project .pro2',{y: '-100px', duration:1, ease:'none'},0.2)

  gsap.timeline({
    scrollTrigger:{
    trigger:'.pro3',
    start:'0% center',
    end:'center 90%',
    scrub:2,
    //markers:true
    }
  })
  .to('.project .pro3',{x: '-200px', duration:1, ease:'none'},0.2)

  gsap.timeline({
    scrollTrigger:{
    trigger:'.pro4',
    start:'0% center',
    end:'center 90%',
    scrub:2,
    //markers:true
    }
  })
  .to('.project .pro4',{x: '200px', duration:1, ease:'none'},0.2)

  // gsap.timeline({
  //   scrollTrigger:{
  //     trigger:'.pro1',
  //     start:'0% 100%',
  //     end:'100% 0%',
  //     toggleClass:{targets:'.project' , className:'on'},
  //     markers:true
  //   }
  // })


/////
});