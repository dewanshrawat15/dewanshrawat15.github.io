$(function(){

var counter=0;

var sentences=["Love Designing As Thy Love Thyself", "The True Designer", "Without JS, Webpages Are Incomplete", "7 Languages, 1 Year, Beatable Enough..??", "Beware, I have arrived", "The Designer That Sets The Limits !"];

	setInterval(function(){
		$('.tag-line').removeClass('slide-down');
		$('.tag-line').addClass('slide-up');
		setTimeout(function(){
			$('.tag-line').text(sentences[counter]);
		}, 350)
		++counter;
		if(counter>6){
			counter=0;
		}
		setTimeout(function(){
			$('.tag-line').removeClass('slide-up');
			$('.tag-line').addClass('slide-down');
		}, 850)
	}, 2750)

	$('.arrow').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top}, 500)
	})

	$(window).scroll(function(){
		var y=$('html, body').scrollTop();
		if(y>120){
			$('.nav, .nav-mob').addClass('nav-active')
		}
		else{
			$('.nav, .nav-mob').removeClass('nav-active')
		}
	})

	$('.logo').click(function(){
		$('html, body').animate({scrollTop: $('.home').offset().top}, 1500)
	})

	$('.about-link').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top}, 1500)
	})

	$('.work-link').click(function(){
		$('html, body').animate({scrollTop: $('.works').offset().top}, 1500)
	})

	$('.contact-link').click(function(){
		$('html, body').animate({scrollTop: $('.contact').offset().top}, 1500)
	})

	$('.about-link').hover(function(){
		$(this).toggleClass('item-hover')
	})

	$('.work-link').hover(function(){
		$(this).toggleClass('item-hover')
	})

	$('.contact-link').hover(function(){
		$(this).toggleClass('item-hover')
	})
})