	
	$(function(){

		var h=$('.home').offset().top;
		var a=$('.about').offset().top;
		var p=$('.portfolio').offset().top;
		var c=$('.contact').offset().top;

		$(window).scroll(function(){
		var y=$('body, html').scrollTop();
			if(y>h && y<p || y>p){
				$('.section-counter, .slider-text').addClass('sc-color')
				$('.slider-down').addClass('slider2')
			}
			else{
				$('.section-counter, .slider-text').removeClass('sc-color')
				$('.slider-down').removeClass('slider2')
			}
		})
		
		$('.mail-link').click(function(){
			window.open("mailto:dewanshrawat15@gmail.com")
		})
		
		$('.facebook-link').click(function(){
			window.open("https://www.facebook.com/the.funky.designer")
		})
		
		$('.instagram-link').click(function(){
			window.open("https://www.instagr.am/the._.sociopath")
		})
		
		$('.github-link').click(function(){
			window.open("https://www.github.com/dewanshrawat15")
		})

		$('.slider-down, .slider-text').hover(function(){
			var y=$('body, html').scrollTop();
			if(y>h && y<p || y>p){
				$('.slider-down').toggleClass('downer-active1')
			}
			else{
				$('.slider-down').toggleClass('downer-active')
			}
		})

		var about=function(){
			$('.section-counter').text('02/04')
			setTimeout(function(){
				$('.about-title').addClass('about-title-active')
			}, 700)
			setTimeout(function(){
				$('.about-text').addClass('about-text-active')
			}, 1050)
		}

		var portfolio=function(){
			$('.section-counter').text('03/04')
			setTimeout(function(){
				$('.portfolio-title').addClass('portfolio-title-active')
			}, 700)
			setTimeout(function(){
				$('.portfolio-text').addClass('portfolio-text-active')
			}, 1050)
			setTimeout(function(){
				$('.portfolio-bttn').addClass('portfolio-bttn-active')
			}, 1200)
		}

		var contact=function(){
			$('.section-counter').text('04/04')
			setTimeout(function(){
				$('.contact-title').addClass('contact-title-active')
			}, 700)
			setTimeout(function(){
				$('.contact-text').addClass('contact-text-active')
			}, 1050)
			setTimeout(function(){
				$('.coninf-mail i').addClass('magic')
			}, 1200)
			setTimeout(function(){
				$('.coninf-fb i').addClass('magic')
			}, 1350)
			setTimeout(function(){
				$('.coninf-insta i').addClass('magic')
			}, 1500)
			setTimeout(function(){
				$('.coninf-github i').addClass('magic')
			}, 1650)
		}

		var pos=0;

		$('.enc').click(function(){
			++pos;
			var current = $('section.active');
			var next=current.next('section')
			switch(pos){
				case 1:
					current.removeClass('active');
					$('html, body').animate({scrollTop: next.offset().top}, 600, function(){
						next.addClass('active');
					});
				break;
				case 2:
					current.removeClass('active');
					$('html, body').animate({scrollTop: next.offset().top}, 600, function(){
						next.addClass('active');
					});
				break;
				case 3:
					current.removeClass('active');
					$('html, body').animate({scrollTop: next.offset().top}, 600, function(){
						next.addClass('active');
					});
				break;
			}
		})

		$(window).scroll(function(){
			var y=$('body, html').scrollTop();
			if(y>h && y<p){
				about()
			}
			else if(y>a && y<c){
				portfolio()
			}
			else if(y>p){
				contact()
			}
			else{
				$('.section-counter').text('01/04')
			}
		})

		var counter=0;

		$(window).keydown(function(e){
			var x=e.keyCode;
			var current=$('section.active')
			var prev=current.prev('section')
			var next=current.next('section')
			if(x==38){
				if(counter<0){
					counter=0;
				}
				else{
					counter--;
					current.removeClass('active');
					$('html, body').animate({scrollTop: prev.offset().top}, 600, function(){
						prev.addClass('active');
					});
				}
			}
			else if(x==40){
				if(counter>3){
					counter=3;
				}
				else{
					counter++;
					current.removeClass('active');
					$('html, body').animate({scrollTop: next.offset().top}, 600, function(){
						next.addClass('active');
					});
				}
			}
		})

		$(window).load(function(){
			$('.name').addClass('slide-down')
			setTimeout(function(){
				$('.name').addClass('border-aaya')
			}, 350)
			setTimeout(function(){
				$('.section-counter, .slider-down, .slider-text').addClass('appear')
			}, 700)
		})

		var scrolling = false;

		$(window).on('wheel mousewheel DOMMouseScroll', function(evt) {
			e = evt.originalEvent;
    		e.preventDefault();
    		if (!e.deltaY && e.wheelDelta){
        		e.deltaY = -1 / 40 * e.wheelDelta;
    		}
    		else{
       			 e.deltaY = e.deltaY || e.detail;
       		}
			var current = $('section.active');
			if(e.deltaY > 0){
				var next = current.next('section');
			}
			else{
				var next = current.prev('section');
			}
			if(next.length && !scrolling){
				scrolling = true;
				current.removeClass('active');
				$('html, body').animate({scrollTop: next.offset().top}, 600, function() {
					scrolling = false;
					next.addClass('active');
				});
			}
		})

		$('.portfolio-bttn').click(function(){
			window.open('https://dewanshrawat15.github.io/portfolio/')
		})

	})
