$('.js-scroll').on('click', function (event) {
	var id = $(this).attr('href');

	if (id.slice(0, 8) !== '#section') return;

	var
		top = $(id).offset().top,
		headerHeight = $('.header').innerHeight(),
		$fog = $('.fog');

	event.preventDefault();

	if ($aside.hasClass(classAsideOpened)) {
		toggleAside('close');
	}

	$('body, html').animate({scrollTop: top - headerHeight}, 700);
});