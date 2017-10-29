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

	$('.fa').hover(function(){
		$(this).toggleClass('fa-active')
	})

})