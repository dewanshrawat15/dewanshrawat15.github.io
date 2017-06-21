	
	$(function(){

		$('.photographer').hover(function(){
			$('.ph').toggleClass('tags-active')
		})

		$('.photographer').click(function(){
			$('.photographer-img').toggleClass('photographer-img-active')
		})

		$('.product').click(function(){
			$('.psyvision-img').toggleClass('psyvision-img-active')
		})

		$('.simulate').hover(function(){
			$('.en').toggleClass('tags-active')
		})

		$('.product').hover(function(){
			$('.ps').toggleClass('tags-active')
		})

		$(window).scroll(function(){
			var b=$('body').scrollTop();
			if(b>=120){
				$('.nav--main').addClass('nav--active')
			}
			else{
				$('.nav--main').removeClass('nav--active')
			}
		})
		$('.nav--item').click(function(){
		var scroll = $(this).attr('href');
		var i=1,j=0,scrollnew,n;
		n=scroll.length;
		scroll= scroll.split("#");
		scrollnew=scroll[1];
		$('body, html').animate({scrollTop:$('.'+scrollnew).offset().top},"slow");
	});
	})
