//햄버거메뉴
$(".hamburger").click(function(){
    $(".wrapper").toggleClass("collapse");
 });


let swiper = new Swiper ('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 30,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: true,
	},
  pagination: {
	 el: 'swiper-pagination'
  }
});

//https://mjmjmj98.tistory.com/31

document.querySelector(".btn1").addEventListener("click",function(){
	var audio1 = new Audio("봄.mp3");
	    audio1.loop = false;
	    audio1.volume = 0.5;
	    audio1.play();
	});

document.querySelector(".btn2").addEventListener("click",function(){
	var audio2 = new Audio("여름.mp3");
		audio2.loop = false;
		audio2.volume = 0.5;
		audio2.play();
	});

document.querySelector(".btn3").addEventListener("click",function(){
	var audio3 = new Audio("가을.mp3");
		audio3.loop = false;
		audio3.volume = 0.5;
		audio3.play();
    });

document.querySelector(".btn4").addEventListener("click",function(){
	var audio4 = new Audio("겨울.mp3");
		audio4.loop = false;
		audio4.volume = 0.5;
		audio4.play();
	});
	
