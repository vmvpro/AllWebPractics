$(function () {
	console.log('my file: getServerInfo.js');
	//send();
	//load();
});

function send_() {


}

//function activeLinkColor (e) {

//	//console.log('file: jq-load.js');
//	//console.log('nav a ');

//	// Пользователь щелкает по ссылке nav
//	e.preventDefault();                                // Останавливаем загрузку новой сcылки
//	var url = this.href;                               // Получаем значение href

//	$('nav a.current').removeClass('current');         // Удаляем текущий индикатор
//	$(this).addClass('current');                       // Новый текущий индикатор

//	$('#container').remove();                          // Удаляем старое содержимое
//	$('#content').load(url + ' #container').hide().fadeIn('slow'); // Новое содержимое
//}

//-----------   GETHTML   --------------

$('nav a').on('click', function (e) {

	// Пользователь щелкает по ссылке nav
	e.preventDefault();                                // Останавливаем загрузку новой сcылки
	var url = this.href;                               // Получаем значение href

	$('nav a.current').removeClass('current');         // Удаляем текущий индикатор
	$(this).addClass('current');                       // Новый текущий индикатор

	$('#container').remove();                          // Удаляем старое содержимое

	//console.log(e);
	console.log('file: getServerInfo');

	let text = e.target.innerText;

	let $content = $('#content');
	$content.empty();

	switch (text) {
		case 'CHAPTER 1':
			AjaxGetHtml(1);
			break;
		case 'CHAPTER 2':
			AjaxGetHtml(2);
			break;
		case 'CHAPTER 3':
			AjaxGetHtml(3);
			break;
		case 'CHAPTER 4':
			AjaxGetJson(1);
			break;
		default:
			$('<p>').append('Not Content').appendTo($content);
	}

});

function AjaxGetJson(id) {
	$.ajax({
		type: "GET",
		url: "/Home/GetJson?id=" + id,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (response) {

			let responseObject = JSON.parse(response);

			// ФОРМИРУЕМ СТРОКУ С НОВЫМ КОНТЕНТОМ 
			// (можно было бы также использовать работу с деревом DOM)
			var newContent = '';
			for (var i = 0; i < responseObject.events.length; i++) { // Перебираем объекты
				newContent += '<div class="event">';
				newContent += '<img src="' + responseObject.events[i].map + '" ';
				newContent += 'alt="' + responseObject.events[i].location + '" />';
				newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
				newContent += responseObject.events[i].date + '</p>';
				newContent += '</div>';
			}

			// Обновляем страницу с новым контентом
			document.getElementById('content').innerHTML = newContent;

		},
		failure: function (response) {
			alert(response);
		}
	});
}

//// Ajax-запрос
function AjaxGetHtml(id) {
	$.ajax({
		type: "GET",

		// С использованием параметра
		url: "/Home/GetHtml?id=" + id,

		// Определяем контент
		contentType: "text/html; charset=utf-8",

		// Определяем тип данных
		dataType: "html",
		success: function (response) {

			$('#content').append(response).hide().fadeIn('slow');

		},
		// В случае ошибки
		failure: function (response) {
			alert(response);
		}
	});
}

//// Подписка на событие
//$('nav .a_').on('click_', function (e) {

//	// Пользователь щелкает по ссылке nav

//	// Останавливаем загрузку новой сcылки
//	e.preventDefault();

//	// Удаляем текущий индикатор
//	$('nav a.current').removeClass('current');

//	// Новый текущий индикатор
//	$(this).addClass('current');

//	// Удаляем старое содержимое
//	$('#container').remove();

//	// Получение наименование ссылки
//	let text = e.target.innerText;

//	// Обнуляем содежимое контента куда 
//	// будем присоединять
//	let $content = $('#content');
//	$content.empty();

//	// Взависимости от нажатия на ссылку 
//	// Вызываем соответствующийся код
//	switch (text) {
//		case 'CHAPTER 1':
//			AjaxGetHtml(1);
//			break;
//		case 'CHAPTER 2':
//			AjaxGetHtml(2);
//			break;
//		case 'CHAPTER 3':
//			AjaxGetHtml(3);
//			break;
//		case 'CHAPTER 4':
//			AjaxGetJson(1);
//			break;
//		default:
//			$('<p>').append('Not Content').appendTo($content);
//	}

//});