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
	console.log('text: ' + text);

	switch (text) {
		case 'GETHTML':
			AjaxFunction(1);
			break;
		case 'GETJSON':
			AjaxFunction(2);
			break;
		default:
			AjaxFunction(3);
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

function AjaxFunction(id) {
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