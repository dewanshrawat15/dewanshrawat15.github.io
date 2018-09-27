	$(function(){
		$(window).load(function(){
			setTimeout(function(){
				$('body').removeClass('noflow')
				$('.loader').addClass('remove-loader')
			}, 6000)
			setTimeout(function(){
				$('.loader').addClass('move-loader')
			}, 7000)
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

	})