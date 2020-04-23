//$(':header').addClass('headlin0e');
//$('li:lt(3)').hide().fadeIn(1500);
//$('li').on('click', function () {
//	$(this).remove();
//});

//$('li em').addClass('seasonal');

//$('li.hot').addClass('favorite');

//$('li[id="one"]').hide().delay(500);
	//.fadeIn(1400).hide();

$(function () {
	$('ul').before('<p class="notice">Список обновлен!</p>');
	$('li.hot').prepend('+ ');
	var $newListItem = $('<li><em>кукуруза</em> без ГМО</li>');
	$('li:last').after($newListItem);
});
