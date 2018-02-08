var
	classBlock = 'toggle',
	classActive = classBlock + '_active',
	$block = $('.' + classBlock),
	pointMobile = 768;

$block.on('click', function() {
	$(this).toggleClass(classActive);
});

$(window).on('resize', function() {

	if (window.innerWidth < pointMobile) return;

	$block.each(function() {
		var $this = $(this);

		if ($this.hasClass(classActive)) {
			$this.removeClass(classActive);
		}
	});
});