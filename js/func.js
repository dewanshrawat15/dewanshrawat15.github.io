	$(function(){
		$(window).load(function(){
			setTimeout(function(){
				$('body').removeClass('noflow')
				$('.loader').addClass('remove-loader')
			}, 3000)
		    var hwid=$(window).innerWidth();
			setTimeout(function(){
				$('.loader').addClass('move-loader')
			}, 4000)
    		$('body').css('width', ''+hwid+'');
		})

		$(window).resize(function(){
		    var htemp=$(window).innerHeight();
		    var hwid=$(window).innerWidth();
    		$('.masthead').css('height', ''+htemp+'');
    		$('body').css('width', ''+hwid+'');
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