﻿//$(':header').addClass('headlin0e');
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

	//f6();

	//f7();

	//f8();

	//f9();

	//f10();

	//f11();

	//f12();

	//f13();

	//f14();

	//f15();

	f16();
});

function f16() {

	let items = ['item1', 'item2', 'item3', 'item4'];

	let $ul = $('#page ul');

	for (var i = 0; i < 5; i++) 
		for (var item of items) 
			$ul.append('<li>' + item + '</li>');
	
	for (var item of items) {
		console.log(item);
	}

	var $window = $(window);
	var $slide_vmv = $('#slide_vmv');
	var endZone = $('#footer').offset().top - $window.height() - 500;
	$window.on('scroll', function () {
		if ((endZone) < $window.scrollTop()) {
			$slide_vmv.animate({ 'right': '0px' }, 250);
		} else {
			$slide_vmv.stop(true).animate({ 'right': '-360px' }, 250);
		}
	});
}

//РАЗМЕРЫ КОНТЕЙНЕРА
function f15() {

	var $page = $('#page');
	$page.width('100%');
	var listHeight = $page.height();
	$('ul').append('<p>Высота: ' + listHeight + 'px</p>');
	$('li').width('100%');
	$('li#one').width(100);
	$('li#two').width('50%');
}
//ВЫРЕЗАНИЕ И КОПИРОВАНИЕ ЭЛЕМЕНТОВ
function f14() {
	var $moveItem = $('#one').detach();
	var $moveItem2 = $('#two');

	//$moveItem2.text(function () { this.innerText + " Two"; });
	$moveItem2.after($moveItem);

	//$moveItem.appendTo('ul');


}

//ВЫБОР ЭЛЕМЕНТОВ ФОРМЫ
//МЕТОДЫ И СОБЫТИЯ, СВЯЗАННЫЕ С ФОРМАМИ
function f13() {
	let $description = $('#itemDescription');

	let $newItemForm = $('#newItemForm');

	let $ul = $('#page ul');

	let $newItemButton = $('#newItemButton');
	$newItemForm.hide();
	$newItemButton.show();

	$newItemButton.on('click', function () {
		$newItemForm.show();
		$newItemButton.hide();
	});

	$newItemForm.on('submit', function (e) {
		if ($description.val().length === 0) {
			console.log("Поле не заполнено!!!");
			e.preventDefault();
		} else {

			let isText = false;

			let $li = $ul.find('li');

			$li.each(function (index, value) {
				let text = this.innerText;

				console.log('text: ' + text);
				console.log('description: ' + $description.val());

				if ($description.val() === text) {
					console.log('такой текст уже существует!!!');
					isText = true;
					console.log('isText:' + isText);
				}

			});

			if (!isText) {
				$ul.append('<li>' + $description.val() + '</li>');
				$newItemForm.hide();
				$newItemButton.show();
			}


			e.preventDefault();

		}
	});

	//$addButton.on('click',
	//	function() {
	//		if ($description.val().length === 0) {
	//			console.log("Поле не заполнено!!!");
	//			//this.preventDefault();
	//			this.stopPropagation();
	//		}
	//	});
}

//ПОИСК ЭЛЕМЕНТОВ ПО ИХ ПОРЯДКОВОМУ НОМЕРУ
function f12() {
	let $li = $('li');
	$li.eq(2).addClass('cool');

	$li.filter(':lt(2)').addClass('complete');
	$li.filter(':gt(2)').removeClass('hot');
}


// Применение фильтров
function f11() {
	let $listItems = $('li');
	//$listItems.filter('.hot:last').removeClass('hot');
	let $currentItem = $listItems.filter('.hot:nth-child(2)');
	$currentItem.removeClass('hot');

	let $ul = $('#page ul');
	$ul.find('em').css('color', 'blue');

	console.dir($ul.find('em'));
}

//ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ ДЛЯ ОБРАБОТЧИКОВ СОБЫТИЙ
//ОБХОД ДЕРЕВА DOM НА ПРАКТИКЕ

function f10() {
	$('h2').append('<a class="show">Показать</a>');
	$('ul').hide();

	$('h2 a').css('cursor:pointer;');

	$('h2 a').on('click', function () {
		$('ul').show();
	});


}

//СОБЫТИЯ БРАУЗЕРА
function f9() {
	$('li').on('click',
		function () {

			let id = this.id;

			$(this).append('<span class="order">' + id + '</span>');
		});

	$('li').on('mouseout', function () {
		$(this).children('span').remove();
	});
}

//ПОЛУЧЕНИЕ И УСТАНОВКА ЗНАЧЕНИЙ АТРИБУТОВ
function f8() {

	$('li:nth-child(3)').removeAttr('class');

	$('li:nth-child(3)').removeClass('hot');

	$('ul').attr('id', 'group');

	$('#one').attr('class', 'cool');


}

//Добавление элементов
function f7() {
	$('ul').before('<p>Список обновлен</p>');

	$('li.hot').prepend('+ ');

	$('#page ul').append('<li>кукуруза <em>без ГМО</em></li>');

	let item = $('<li>кукуруза <em>без ГМО 2</em></li>');

	$('li:last').after(item);


}

function f6() {
	//Обновление элементов
	$('li:contains("кедровые")').text('миндаль');
	$('li.hot').html(function () {
		return '<em>' + $(this).text() + '</em>';
	});
}

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




