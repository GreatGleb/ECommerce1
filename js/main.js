let cover = document.getElementById("cover2");

let Goods = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];

Goods.addEventListener("click", dropdownGoods);

let ddgods = document.getElementById("drop_down_goods");

let dg1 = ddgods.getElementsByTagName("div")[0];
let dg2 = ddgods.getElementsByTagName("div")[1];
let dg3 = ddgods.getElementsByTagName("div")[2];
let dg4 = ddgods.getElementsByTagName("div")[3];
let dg5 = ddgods.getElementsByTagName("div")[4];
let dg6 = ddgods.getElementsByTagName("div")[5];
let dg7 = ddgods.getElementsByTagName("div")[6];
let dg8 = ddgods.getElementsByTagName("div")[7];
let dg9 = ddgods.getElementsByTagName("div")[8];
let dg10 = ddgods.getElementsByTagName("div")[9];

let goods = document.getElementsByClassName("main-goods")[0];
let goodsli = goods.getElementsByTagName("li");

function dropdownGoods() {
	if(ddgods.dataset.state=="closed") {
		ddgods.style.opacity="1";
		ddgods.dataset.state="opened";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg1.className = "block";
		goodsli[0].className = "active";
	}
}

document.getElementsByClassName("clickMenu")[0].addEventListener("click", OpenMenu);
document.getElementsByClassName("clickMenu")[1].addEventListener("click", OpenMenu);
document.getElementsByClassName("clickMenu")[2].addEventListener("click", OpenMenu);

function OpenMenu() {
	let menu = document.getElementById("mob-menu");
    if(menu.className != "open") {
		menu.className = "open";
		let coveR = document.getElementById("cover");
		coveR.className = "visible";
		document.body.style.overflow = "hidden";
	}
}


ddgods.addEventListener("mouseout", function() {		
		if(ddgods.dataset.state=="closed"&&
		(event.relatedTarget.id=="cover2")) {
			ddgods.style.opacity="0";
			ddgods.style.zIndex="9";
			cover.style.display="none";
			
			dg1.className = "none";
			dg2.className = "none";
			dg3.className = "none";
			dg4.className = "none";
			dg5.className = "none";
			dg6.className = "none";
			dg7.className = "none";
			dg8.className = "none";
			dg9.className = "none";
			dg10.className = "none";
			goodsli[0].className = "";
			goodsli[1].className = "";
			goodsli[2].className = "";
			goodsli[3].className = "";
			goodsli[4].className = "";
			goodsli[5].className = "";
			goodsli[6].className = "";
			goodsli[7].className = "";
			goodsli[8].className = "";
			goodsli[9].className = "";
		}
});

goodsli[0].addEventListener("mouseover", function() {
		goodsli[0].className = "active";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";
		dg1.className = "block";
});

goodsli[1].addEventListener("mouseover", function() {
		goodsli[1].className = "active";
		goodsli[0].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";		
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";		
		dg1.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";		
		dg2.className = "block";
});

goodsli[2].addEventListener("mouseover", function() {
		goodsli[2].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg1.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";		
		dg3.className = "block";
});

goodsli[3].addEventListener("mouseover", function() {
		goodsli[3].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg1.className = "none";
		dg3.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";		
		dg4.className = "block";
});

goodsli[4].addEventListener("mouseover", function() {
		goodsli[4].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg1.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";
		dg5.className = "block";
});

goodsli[5].addEventListener("mouseover", function() {
		goodsli[5].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg1.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";
		dg6.className = "block";
});

goodsli[6].addEventListener("mouseover", function() {
		goodsli[6].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg1.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg10.className = "none";
		dg7.className = "block";
});

goodsli[7].addEventListener("mouseover", function() {
		goodsli[7].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg1.className = "none";
		dg9.className = "none";
		dg10.className = "none";
		dg8.className = "block";
});

goodsli[8].addEventListener("mouseover", function() {
		goodsli[8].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[9].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg1.className = "none";
		dg10.className = "none";
		dg9.className = "block";
});

goodsli[9].addEventListener("mouseover", function() {
		goodsli[9].className = "active";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		ddgods.style.opacity="1";
		ddgods.style.zIndex="15";
		cover.style.display="block";
		dg2.className = "none";
		dg3.className = "none";
		dg4.className = "none";
		dg5.className = "none";
		dg6.className = "none";
		dg7.className = "none";
		dg8.className = "none";
		dg9.className = "none";
		dg1.className = "none";
		dg10.className = "block";
});

document.addEventListener("click", function(e) {
	let menu = document.getElementById("mob-menu");
	if(menu.className != "") {
		if(((e.target.className != "gb_qc clickMenu")&&(e.target.className.baseVal == undefined))
			&&(e.target.id != "mob-menu")&&((e.path[1].id!="mob-menu")&&(e.path[2].id!="mob-menu"))
		&&(e.target.outerText!="Товары")) {
			menu.className = "close";
			let coveR = document.getElementById("cover");
			coveR.className = "";
			document.body.style.overflow = "auto";
		}
	}
	
	if(e.target.id=="cover2") {
		document.getElementById("cover2").style.display="none";
		ddgods.style.opacity="0";
		ddgods.dataset.state="closed";
		ddgods.style.zIndex="9";
		goodsli[0].className = "";
		goodsli[1].className = "";
		goodsli[2].className = "";
		goodsli[3].className = "";
		goodsli[4].className = "";
		goodsli[5].className = "";
		goodsli[6].className = "";
		goodsli[7].className = "";
		goodsli[8].className = "";
		goodsli[9].className = "";
	}
});

// ______________________________________________________________
function blockRev() {
  let stateB = modalB.getAttribute('data-state');
  if (stateB == 'open') {
      modalB.setAttribute('data-state', 'closed');
  } else {
      modalB.setAttribute('data-state', 'open');
  }
}

// Element Variables
let modalB = document.querySelector('.modalBlock');
let modalwindow = document.querySelector('.modal__block');
let modalwindowsli = document.getElementsByClassName('modal_block_li');
let togglesB = document.getElementsByClassName('togglesV');

// Assign event handlers to every element with the 'data-toggle' attribute
for (let i = 0; i < togglesB.length; i++) {
  togglesB[i].addEventListener('click', function() {
    blockRev();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindow.addEventListener('click', function() {
    event.stopPropagation();
});

for (let i = 0; i < modalwindowsli.length; i++) {
  modalwindowsli[i].addEventListener('click', function() {
    event.stopPropagation();
  });
}

function opDel(n) {
  modalwindow.dataset.state="closed";
  modalwindowsli[n].dataset.state="open";
}

let mlis = modalwindow.getElementsByTagName("li");
for (let i = 0; i < mlis.length; i++) {
  mlis[i].addEventListener('click', function() {
    opDel(i);
  });
}

function modlBack(n) {
  modalwindow.dataset.state="open";
  modalwindowsli[n].dataset.state="closed";
}

let mbacks = document.getElementsByClassName('back');
for (let i = 0; i < mbacks.length; i++) {
  mbacks[i].addEventListener('click', function() {
    modlBack(i);
  });
}

document.body.addEventListener('touchstart', touchStartMobMenu);


function touchEndMobMenu() {
	if (isStartLeftSide) {
		let touchClientX = event.changedTouches[0].clientX;
		let menu = document.getElementById("mob-menu");
		let coveR = document.getElementById("cover");

		menu.style.transition = "left ease 1s";
		menu.style.left = "";
		
		if(touchClientX < screen.width * 8 / 20) {				
			coveR.className = "";
			document.body.style.overflow = "auto";
			menu.className = "close";
		} else {
			menu.className = "open";			
		}
		
		let menuLi = menu.getElementsByTagName('ul')[0].getElementsByTagName('li');
		menuLi[0].style.top = "";
		menuLi[0].style.opacity = "";
		menuLi[0].style.paddingTop = "";
		menuLi[0].style.transition = "";

		menuLi[1].style.top = "";
		menuLi[1].style.opacity = "";
		menuLi[1].style.paddingTop = "";
		menuLi[1].style.transition = "";
	}
}

let isStartLeftSide = false;

function touchMoveMobMenu() {
	if (isStartLeftSide) {
		let touchClientX = event.changedTouches[0].clientX;
		let menu = document.getElementById("mob-menu");
		
		if (touchClientX >= screen.width * 8 / 10) {
			return;
		}

		let moveMenu = screen.width * -8 / 10 + touchClientX;
		menu.style.left = moveMenu+"px";
		menu.style.transition = "left 0s";
	}
}

function touchStartMobMenu() {
	let touchClientX = event.changedTouches[0].clientX;
	let radiusX = event.changedTouches[0].radiusX;
	let menu = document.getElementById("mob-menu");

	if (menu.className!="open" && touchClientX <= radiusX ||
		menu.className=="open" && 
		touchClientX + radiusX > screen.width * 8 / 10 && 
		touchClientX - radiusX < screen.width * 8 / 10) {
			
		isStartLeftSide = true;
		let coveR = document.getElementById("cover");
		let moveMenu = screen.width * -8 / 10 + touchClientX;
		
		if (moveMenu > 0) {
			return;
		}
		
		menu.style.top = document.body.scrollTop + "px";
		coveR.style.bottom  = "-" + document.body.scrollTop + "px";
		
		menu.style.left = moveMenu + "px";
		menu.style.transition = "left 0s";
		coveR.className = "visible";
		document.body.style.overflow = "hidden";
		
		document.body.addEventListener('touchmove', touchMoveMobMenu);
		document.body.addEventListener('touchend', touchEndMobMenu);

		let menuLi = menu.getElementsByTagName('ul')[0].getElementsByTagName('li');
		menuLi[0].style.top = "0";
		menuLi[0].style.opacity = "1";
		menuLi[0].style.paddingTop = "10px";
		menuLi[0].style.transition = "all 0s";
		menuLi[1].style.top = "0";
		menuLi[1].style.opacity = "1";
		menuLi[1].style.paddingTop = "30px";
		menuLi[1].style.transition = "all 0s";

	} else {
		isStartLeftSide = false;
	}
}

document.body.addEventListener('scroll', function() {
	let popUpCartAndAccount = document.getElementsByClassName("pop-up_cart_and_account")[0];
	
	if (popUpCartAndAccount.classList.contains('not-shown')
		&& document.body.scrollTop > 90) {
				
		popUpCartAndAccount.className = "pop-up_cart_and_account is-shown";

	} else if (popUpCartAndAccount.classList.contains('is-shown')
				&&document.body.scrollTop <= 90) {

		popUpCartAndAccount.className = "pop-up_cart_and_account not-shown";

	}
});

//______________________________________________________________

$(document).ready(function() {
	const $cont = $(".cont");
	const $slider = $(".slider");
	const $nav = $(".nat");
	const winW = $(window).width();
	const animSpd = 750; // Change also in CSS
	const distOfLetGo = winW * 0.2;
	let curSlide = 1;
	let animation = false;
	let autoScrollVar = true;
	let diff = 0;
	var counter = 0;
	

	// Generating slides
	let numOfCities = 8;

	let generateSlide = function(city) {
		let frag1 = $(document.createDocumentFragment());
		let frag2 = $(document.createDocumentFragment());
		const numSlide = city + 1;

		const $slide = $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
							<div data-target='right' class="side-nav side-nav--right"></div>
							<div data-target='left' class="side-nav side-nav--left"></div>
							<div class="slide_info">
								<div class="text">Yo!<br>We are company.</div>
								<div class="imagines"></div>
							</div>
						</div>`);


		const navSlide = $(
			`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`
		);
		frag2.append(navSlide);
		$nav.append(frag2);

		$slide
			.find(`.slide-${numSlide}_dark`)			
			.append(frag1);
		$slider.append($slide);
	};

	for (let i = 0, length = numOfCities; i < length; i++) {
		generateSlide(i);
	}

	let buttoN1 = document.createElement('a');
	buttoN1.setAttribute('class', 'button');
	buttoN1.setAttribute('href', '#');
	buttoN1.innerHTML="Список услуг";
	document.getElementsByClassName("slide--1")[0].getElementsByClassName("slide_info")[0].appendChild(buttoN1);

	$(".nav__slide--1").addClass("nav-active");
	
	
	let Cslide = $(".slide--1");
	Cslide.addClass("act_slide");
	
	// Navigation
	
	function bullets(dir) {
		$(".nav__slide--" + curSlide).removeClass("nav-active");
		$(".nav__slide--" + dir).addClass("nav-active");
	}

	function timeout() {
		animation = false;
	}
	
	var counter;
	
var timerId = setInterval(function() {
		navigateRight();
		if(counter<8){
		counter=curSlide;}
	if((counter>7)&&(counter<10)) {
		counter++;
	}
	if(counter==10) {
		let ex_act = $(".act_slide");
		let Cslide = $(".slide--1");	
		ex_act.removeClass("act_slide");	
		Cslide.addClass("act_slide");
		bullets(1);
		curSlide=0;
		counter=1;
		if (!autoScrollVar) return;
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
	}
}, 16000);

	function pagination(direction) {
		animation = true;
		diff = 0;
		$slider.addClass("animation");
		$slider.css({
			transform: "translate3d(-" + (curSlide - direction) * 100 + "%, 0, 0)"
		});

		$slider.find(".slide__darkbg").css({
			transform: "translate3d(" + (curSlide - direction) * 50 + "%, 0, 0)"
		});
	}

	function navigateRight() {
		if (!autoScrollVar) return;
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
		bullets(curSlide + 1);
		curSlide++;
		let ex_act = $(".act_slide");
		let Cslide = $(".slide--"+curSlide);	
		ex_act.removeClass("act_slide");	
		Cslide.addClass("act_slide");
	}

	function navigateLeft() {
		if (curSlide <= 1) return;
		pagination(2);
		setTimeout(timeout, animSpd);
		bullets(curSlide - 1);
		curSlide--;
		let ex_act = $(".act_slide");
		let Cslide = $(".slide--"+curSlide);	
		ex_act.removeClass("act_slide");	
		Cslide.addClass("act_slide");
	}

	function toDefault() {
		pagination(1);
		
		let ex_act = $(".act_slide");
		let Cslide = $(".slide--"+curSlide);	
		ex_act.removeClass("act_slide");	
		Cslide.addClass("act_slide");
		
		setTimeout(timeout, animSpd);
	}

	// Events
	let slides = document.querySelectorAll(".slide");
	
	$(document).on("mousedown touchstart", ".slide", function(e) {
		if (animation) return;
		let target = +$(this).attr("data-target");
		let startX = e.pageX || e.originalEvent.touches[0].pageX;
		$slider.removeClass("animation");

		$(document).on("mousemove touchmove", function(e) {
			let x = e.pageX || e.originalEvent.touches[0].pageX;
			diff = startX - x;
			if ((target === 1 && diff < 0) || (target === numOfCities && diff > 0))
				return;

			$slider.css({
				transform: "translate3d(-" + ((curSlide - 1) * 100 + diff / 30) + "%, 0, 0)"
			});

			$slider.find(".slide__darkbg").css({
				transform: "translate3d(" + ((curSlide - 1) * 50 + diff / 60) + "%, 0, 0)"
			});

			let ex_act = $(".act_slide");
			let Cslide = $(".slide--"+curSlide);	
			ex_act.removeClass("act_slide");	
			Cslide.addClass("act_slide");			
		});
	});

	function slideMouseUpAndTouchEnd() {
		$(document).off("mousemove touchmove");

		if (animation) return;

		if (diff >= distOfLetGo) {
			navigateRight();
		} else if (diff <= -distOfLetGo) {
			navigateLeft();
		} else {
			toDefault();
		}
	}
	
	document.addEventListener("mouseup", slideMouseUpAndTouchEnd);
	document.addEventListener("touchend", slideMouseUpAndTouchEnd);

	let navSlides = document.querySelectorAll(".nav__slide");
	
	for (let i = 0; i < navSlides.length; i++) {
		navSlides[i].addEventListener("click", function() {
			
			if(!this.classList.contains('nav-active')) {				
				let target = +$(this).attr("data-target");
				bullets(target);
				curSlide = target;
				pagination(1);
					
				let ex_act = $(".act_slide");
				let Cslide = $(".slide--"+curSlide);	
				ex_act.removeClass("act_slide");	
				Cslide.addClass("act_slide");
			}
		});
	}
	
	let navSides = document.querySelectorAll(".side-nav");
	
	for (let i = 0; i < navSides.length; i++) {
		navSides[i].addEventListener("click", function() {
			let target = $(this).attr("data-target");

			if (target === "right") navigateRight();
			if (target === "left") navigateLeft();
		});
	}

	document.addEventListener("keydown", function(e) {
		if (e.which === 39) navigateRight();
		if (e.which === 37) navigateLeft();
	});	
	
	function sliderScroll() {
		if (animation) return;
		let delta = event.wheelDelta;

		if (delta > 0 || event.detail < 0) navigateLeft();
		if (delta < 0 || event.detail > 0) navigateRight();
		
		if (event.preventDefault)  event.preventDefault();
		event.returnValue = false;
	}
	
	let slidesDarkBg = document.querySelectorAll(".slide__darkbg");
	let slidesText = document.querySelectorAll(".text");
	let slidesImagines = document.querySelectorAll(".imagines");
	let slidesButton = document.querySelectorAll(".button");
	let slidesSidesNav = document.querySelectorAll(".side-nav");
	
	for (let i = 0; i < slidesDarkBg.length; i++) {
		slidesDarkBg[i].addEventListener("mousewheel", sliderScroll);
		slidesDarkBg[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesText.length; i++) {
		slidesText[i].addEventListener("mousewheel", sliderScroll);
		slidesText[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesImagines.length; i++) {
		slidesImagines[i].addEventListener("mousewheel", sliderScroll);
		slidesImagines[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesImagines.length; i++) {
		slidesImagines[i].addEventListener("mousewheel", sliderScroll);
		slidesImagines[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesButton.length; i++) {
		slidesButton[i].addEventListener("mousewheel", sliderScroll);
		slidesButton[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesButton.length; i++) {
		slidesButton[i].addEventListener("mousewheel", sliderScroll);
		slidesButton[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
	
	for (let i = 0; i < slidesSidesNav.length; i++) {
		slidesSidesNav[i].addEventListener("mousewheel", sliderScroll);
		slidesSidesNav[i].addEventListener("DOMMouseScroll", sliderScroll);
	}
});


//Mobile footer

let mobToggle = document.querySelectorAll('.footer__sections__mobile-toggle');
let mobUlSections = document.querySelectorAll('.footer__sections-content');
let mobLiSections = document.querySelectorAll('.footer__sections-item');

for (let i = 0; i < mobToggle.length; i++) {
    let buttonMobToggle = mobToggle[i];
    buttonMobToggle.addEventListener("click", openMobLi.bind(null, i));
}

function openMobLi(i, event) {
	if(mobUlSections[i].style.display=="block") {
		mobLiSections[i+1].className = "footer__sections-item";
		mobUlSections[i].style.display = "none";	
	} else {
		mobLiSections[i+1].className = "footer__sections-item active";
		mobUlSections[i].style.display = "block";
	}
}










