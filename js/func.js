	$(function(){
		$(window).load(function(){
			setTimeout(function(){
				$('body').removeClass('noflow')
				$('.loader').addClass('remove-loader')
			}, 3000)
			setTimeout(function(){
				$('.loader').addClass('move-loader')
			}, 4000)
		})

		$(window).resize(function(){
		    var htemp=$(window).innerHeight();
    		$('.masthead').css('height', ''+htemp+'');
		})

		setInterval(function(){
		    var htemp=$(window).innerHeight();
		    var pdd=htemp/2;
		    pdd=pdd-175;
    		$('.masthead').css('height', ''+htemp+'');
    		$('.masthead').css('padding-top', ''+pdd+'px');
		}, 50)

		$('.c-line').click(function(){
			window.open("mailto:dewanshrawat15@gmail.com")
		})

		$('.foss').click(function(){
			window.open("https://github.com/fossasia")
		})

	})