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
	var audio1 = new Audio("초콜릿.mp3");
	    audio1.loop = false;
	    audio1.volume = 0.5;
	    audio1.play();
	});

document.querySelector(".btn2").addEventListener("click",function(){
	var audio2 = new Audio("케이크.mp3");
		audio2.loop = false;
		audio2.volume = 0.5;
		audio2.play();
	});

document.querySelector(".btn3").addEventListener("click",function(){
	var audio3 = new Audio("피자.mp3");
		audio3.loop = false;
		audio3.volume = 0.5;
		audio3.play();
    });

document.querySelector(".btn4").addEventListener("click",function(){
	var audio4 = new Audio("도넛.mp3");
		audio4.loop = false;
		audio4.volume = 0.5;
		audio4.play();
	});
	
document.querySelector(".btn5").addEventListener("click",function(){
	var audio5 = new Audio("버블티.mp3");
		audio5.loop = false;
		audio5.volume = 0.5;
		audio5.play();
	});
	
document.querySelector(".btn6").addEventListener("click",function(){
	var audio6 = new Audio("스타벅스.mp3");
		audio6.loop = false;
		audio6.volume = 0.5;
		audio6.play();
	});
	
document.querySelector(".btn7").addEventListener("click",function(){
	var audio7 = new Audio("버거킹.mp3");
		audio7.loop = false;
		audio7.volume = 0.5;
		audio7.play();
	});
	
document.querySelector(".btn8").addEventListener("click",function(){
	var audio8 = new Audio("맥도날드.mp3");
		audio8.loop = false;
		audio8.volume = 0.5;
		audio8.play();
	});

document.querySelector(".btn9").addEventListener("click",function(){
	var audio9 = new Audio("서브웨이.mp3");
		audio9.loop = false;
		audio9.volume = 0.5;
		audio9.play();
	});
		
document.querySelector(".btn10").addEventListener("click",function(){
	var audio10 = new Audio("kfc.mp3");
		audio10.loop = false;
		audio10.volume = 0.5;
		audio10.play();
	});
			