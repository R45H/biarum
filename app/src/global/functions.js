/* Проверка наличия скролла на странице */
function hasScroll(a) {
	var d = document,
		b = d.body,
		e = d.documentElement,
		c = "client" + a;
	a = "scroll" + a;
	return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
}
/* ========== */

/* Узнать ширину ползунка */
function getScrollbarWidth() {
	var
		documentWidth = parseInt(document.documentElement.clientWidth),
		windowWidth = parseInt(window.innerWidth);
	return windowWidth - documentWidth;
}
/* ========== */

/* Сделать боди фиксированным */
function toggleBodyScroll(noscroll) {
	var
		$body = $('body'),
		noScrollClass = 'noscroll';

	if (noscroll === false) {
		$body
			.css('padding-right', '')
			.removeClass(noScrollClass);
	} else {
		$body
			.css('padding-right', getScrollbarWidth())
			.addClass(noScrollClass);
	}
}
/* ========== */

/* Добавление хеша строке с ID */
function addIdHash(id) {

	if (id && id.charAt(0) !== '#') {
		id = '#' + id;
	}

	return id;
}
/* ========== */

/* Функция открытия / закрытия модалки */
function toggleModal(action, modalId) {

	var
		id = addIdHash(modalId),
		$modal = $(id),
		$body = $('body'),
		classBlock = 'modal',
		classVisible = classBlock + '_visible',
		classWrap = classBlock + '__wrap',
		classWrapVisible = classBlock + '__wrap_visible',
		classInput = 'input',
		classFog = 'fog',
		$wrap = $modal.find('.' + classWrap),
		delay = 300,
		closeOnEsc = function(event) { // Закрытие модалки при нажатии ESC
			if (event.keyCode != 27) return;
			toggleModal('close', id);
		};

	if (action == 'open') {

		if (!$modal.length) {
			console.log('Модалка не найдена!');
			return;
		}

		if ($modal.hasClass(classVisible)) {
			console.log('Модалка уже открыта!');
			return;
		}

		$modal.addClass(classVisible);

		toggleBodyScroll(true);
		$body.append('<div class="' + classFog + '"></div>');
		$('.' + classFog).fadeIn(delay);

		$(document).on('keydown', closeOnEsc);

		setTimeout(function() {
			$wrap.addClass(classWrapVisible);
		}, 0);

		setTimeout(function() {
			$modal.find('.' + classInput).first().focus();
		}, delay);
	}

	if (action == 'close') {

		if (!$modal.length) {
			console.log('Модалка не найдена!');
			return;
		}

		if (!$modal.hasClass(classVisible)) {
			console.log('Модалка уже закрыта!');
			return;
		}

		$(document).off('keydown', closeOnEsc);

		$modal
			.find('.' + classInput)
			.val('');

		$wrap.removeClass(classWrapVisible);
		$('.' + classFog).fadeOut(delay);

		setTimeout(function() {
			$modal.removeClass(classVisible);
			toggleBodyScroll(false);
			$('.' + classFog).remove();
		}, delay);
	}
}
/* ========== */