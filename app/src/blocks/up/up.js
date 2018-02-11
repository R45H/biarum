var
	$up = $('.up'),
	delay = 700;

$(window).on('scroll resize', function() {
	var topSpace = 1000;

	$(this).scrollTop() > topSpace ?
		$up.fadeIn() :
		$up.fadeOut();
});

$up.on('click', function() {
	$('body, html').animate({
		scrollTop: 0
	}, delay);
});