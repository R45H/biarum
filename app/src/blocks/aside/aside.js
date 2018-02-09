var
	$body = $('body'),
	classAside = 'aside',
	classAsideOpened = classAside  + '_opened',
	classItemOpened = classAside + '__item_opened',
	classFog = 'fog',
	$aside = $('.' + classAside),
	$item = $('.' + classAside + '__item'),
	delay = 300;

/* Скрытие / раскрытие бокового меню при клике на гамбургер */
$toggle.on('click', function() {

	if ($aside.hasClass(classAsideOpened)) {
		toggleAside('close');
	} else {
		toggleAside('open');
	}
});
/* ===== */

/* Действия при ресайзе */
$(window).on('resize', function() {
	if (!$aside.hasClass(classAsideOpened) || window.innerWidth < pointMobile) return;
	toggleAside('close');
});
/* ===== */

/* Клик по затемнению */
$(document).on('click', '.' + classFog, function() {
	if (!$aside.hasClass(classAsideOpened)) return;
	toggleAside('close');
});
/* ===== */

// Закрытие бокового меню при нажатии ESC
var closeAsideOnEsc = function(event) {
	if (event.keyCode != 27) return;
	toggleAside('close');
};
// =====

/* Показывает или скрывает боковое меню */
function toggleAside(action) {

	if (action == 'open') {
		$aside.addClass(classAsideOpened);
		$body.append('<div class="' + classFog + '"></div>');
		$('.' + classFog).fadeIn(delay);
		$(document).on('keydown', closeAsideOnEsc);
		$toggle.css('right', getScrollbarWidth());
		toggleBodyScroll();
	}

	if (action == 'close') {
		$(document).off('keydown', closeAsideOnEsc);
		$item.removeClass(classItemOpened);
		$aside.removeClass(classAsideOpened);
		$('.' + classFog).fadeOut(delay / 2);
		$toggle.removeClass(classToggleActive);

		setTimeout(function() {
			$toggle.css('right', '');
			$('.' + classFog).remove();
			toggleBodyScroll(false);
		}, delay / 2);
	}
}
/* ===== */