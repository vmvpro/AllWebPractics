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

//// ИСПОЛЬЗОВАНИЕ МЕТОДА.ANIMATE()
//$(function () {
//	$('li').on('click', function () {
//		$(this).animate({
//			opacity: 0.0,
//			paddingLeft: '+=80'
//		}, 500, function () {
//			$(this).remove();
//		});
//	});
//});

//==================================================
//$('li[id!="one"]')
//	.hide()
//	.delay(1000)
//	.fadeIn(2000);

$(function () {
	//f1();
	//f3();
	//f4();

	//f5();

});

function f5() {

	//$('li:contains("кедровые")').text('миндаль');
	//$('li.hot').html(function () {
	//	return '<em>' + $(this).text() + '</em>';
	//});

	//let $ul = $('.page>ul')[0];
	//let $li01 = $ul.filter('.hot');

	//console.dir($ul);
	//console.dir($li01);
	
	//$('li#one').remove();
}


function f4() {
	let button = $('#newItemForm :input[type=button]');
	console.log(button);
}

function f3() {
	let ul = f2();

	let txt = ul.html();
	console.dir(txt);



}



function f2() {
	//Использование методов .html() и .text()
	let ul = $('#page ul');
	ul.prepend('<li>');

	let li = ul[0].firstChild;
	li.append('vmv');

	//li.text("vmv");
	//console.dir(ul);
	//console.dir(li);

	return ul;
	//ul.append('<li>');
}

function f1() {
	$('#one').addClass('cool');

	// добавить элемент
	//$('ul').append('<li>vmv</li>');
	$('ul').append('<li>');
	//$('ul').prepend('<li>vmv</li>');

	//Определить элемент без класса и ИД
	var $vmvLi = $('ul li:not([id]):not([class])');
	$vmvLi.addClass('favorite');
	$vmvLi.text("new text");

	console.dir($vmvLi);
}




