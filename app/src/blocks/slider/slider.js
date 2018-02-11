var
	classSlider = 'slider',
	$slider = $('.' + classSlider);

$slider.slick({
	arrows: true,
	infinite: false,
	adaptiveHeight: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<button class="' + classSlider + '__btn ' + classSlider + '__btn_prev"></button>',
	nextArrow: '<button class="' + classSlider + '__btn ' + classSlider + '__btn_next"></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});