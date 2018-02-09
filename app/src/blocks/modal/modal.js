var
	$links = $('[data-modal]'),
	classModal = 'modal',
	classModalClose = classModal + '__close';

if (!$links.length) return;

$links.each(function() {
	var
		$this = $(this),
		id = addIdHash($this.attr('data-modal'));

	if (!$(id).length) return;

	// Клик по кнопке, открывающей модалку
	$this.on('click', function() {

		if ($aside.hasClass(classAsideOpened)) {
			toggleAside('close');
			setTimeout(function() {
				toggleModal('open', id);
			}, delay / 2);
		} else {
			toggleModal('open', id);
		}

		return false;
	});
	// =====

	// Клик по кнопке "закрыть"
	$(id).find('.' + classModalClose).on('click', function() {
		toggleModal('close', id);
	});
	// =====

	// Клик по серому фону
	$(id).on('click', function(event) {
		if (!$(event.target).hasClass(classModal)) return;
		toggleModal('close', id);
	});
	// =====
});