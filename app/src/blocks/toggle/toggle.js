var
	classToggle = 'toggle',
	classToggleActive = classToggle + '_active',
	$toggle = $('.' + classToggle),
	pointMobile = 576;

$toggle.on('click', function() {
	$(this).toggleClass(classToggleActive);
});

$(window).on('resize', function() {

	if (window.innerWidth < pointMobile) return;

	$toggle.each(function() {
		var $this = $(this);

		if ($this.hasClass(classToggleActive)) {
			$this.removeClass(classToggleActive);
		}
	});
});