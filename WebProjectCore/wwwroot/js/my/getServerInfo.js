$(function () {
	console.log('my scripts.js');
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
	//$content.remove();

	console.log('text: ' + text);

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

	//if (text === 'GETHTML') {
	//	AjaxFunction(id);
	//	elseif(text === 'GETHTML') {
	//	}
	//	//$content.append("<p>VMV Content</p>");
	//	//$('<p>').append('VMV Content 2').appendTo($content);

	//	//return;

	//}
});

function AjaxGetJson(id) {
	$.ajax({
		type: "GET",
		//url: "/Home?handler=Ajax",
		url: "/Home/GetJson?id=" + id,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (response) {

			//let _responseText = response;
			//let $content = $('#content');
			//$('<p>').append(_responseText + ' myfile.js').appendTo($content);
			//$content.append(response).hide().fadeIn('slow');
			let responseObject = JSON.parse(response);
			// ФОРМИРУЕМ СТРОКУ С НОВЫМ КОНТЕНТОМ (можно было бы также использовать работу с деревом DOM)
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

function AjaxGetHtml(id) {
	$.ajax({
		type: "GET",
		//url: "/Home?handler=Ajax",
		url: "/Home/GetHtml?id=" + id,
		contentType: "text/html; charset=utf-8",
		dataType: "html",
		success: function (response) {

			//let _responseText = response;
			let $content = $('#content');
			//$('<p>').append(_responseText + ' myfile.js').appendTo($content);
			$content.append(response).hide().fadeIn('slow');

			//$content.load(response).hide().fadeIn('slow'); // Новое содержимое
			//var dvItems = $("#dvItems");
			//dvItems.empty();
			//$.each(response,
			//	function (i, item) {
			//		var $tr = $('<li>').append(item).appendTo(dvItems);
			//	});
		},
		failure: function (response) {
			alert(response);
		}
	});
}