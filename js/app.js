    var scrolled;
	var timer;

	document.getElementById('b_up').onclick = function(){
		scrolled = window.pageYOffset;
		
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100; //100 - скорость прокрутки
			timer = setTimeout(scrollToTop, 50);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}

    

    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2
      });

      
     