//$(':header').addClass('headlin0e');
//$('li:lt(3)').hide().fadeIn(1500);
//$('li').on('click', function () {
//	$(this).remove();
//});

//$('li em').addClass('seasonal');

//$('li.hot').addClass('favorite');

//$('li[id="one"]').hide().delay(500);
	//.fadeIn(1400).hide();
//----------------------------------------------------
//$(function () {
//	let pTag = $('p');
//	pTag.append('Список VMV обновлен!!!');
	
//	//console.dir($pTag);

//	pTag.addClass('notice');
	
//	console.dir(pTag);

//	$('ul').before(pTag);
//	//$('ul').before('<p class="notice">Список обновлен!</p>');
//	$('li.hot').prepend('+ ');
//	var $newListItem = $('<li><em>кукуруза</em> без ГМО</li>');
//	$('li:last').after($newListItem);
//});

//$(function () {
//	var $listText = $('ul').text();
//	$('ul').append('<p>' + $listText + '</p>');
//});

//--------------------------------------
// События 

//$(function () {
//	var ids = '';
//	var $listItems = $('li');
//	$listItems.on('mouseover click', function () {
//		ids = this.id;
//		$listItems.children('span').remove();
//		$(this).append(' <span class="priority">' + ids + '</span>');
//	});
//	$listItems.on('mouseout', function () {
//		$(this).children('span').remove();
//	});
//});

//--------------------------------------
// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
//$(function () {
//	var listItem, itemStatus, eventType;
//	$('ul').on(
//		'click mouseover',
//		':not(#four)',
//		{ status: 'important', vmv:"hello-vmv" },
//		function (e) {
//			listItem = 'Элемент: ' + e.target.textContent + '<br />';
//			itemStatus = 'Состояние: ' + e.data.vmv + '<br />';
//			eventType = 'Событие: ' + e.type;
//			$('#notes').html(listItem + itemStatus + eventType);
//		}
//	);
//});

////Визуальные эффекты Jquery
//$(function () {
//	$('h2').hide().slideDown();
//	var $li = $('li');
//	$li.hide().each(function (index) {
//		$(this).delay(700 * index).fadeIn(700);
//	});
//	$li.on('click', function () {
//		$(this).fadeOut(700);
//	});
//});

// ИСПОЛЬЗОВАНИЕ МЕТОДА.ANIMATE()
$(function () {
	$('li').on('click', function () {
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80'
		}, 500, function () {
			$(this).remove();
		});
	});
});