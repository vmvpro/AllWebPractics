$(function () {
	console.log('my scripts.js');
	//send();
	load();
});

function send() {
	//$('#glava').text('AJAX');

	let $btn = $('#send');
	//btn.text('click me');
	//console.dir(btn);

	//$btn.on('click', dataXML());
	$btn.on('click', function () {
		dataJSON();
	});

}

function load() {

	console.dir(document);

	let title = document.title.toUpperCase(); //$('head')['title'];
	console.log('title: ' + title);

	//$('.nav-vmv a').css('color', 'red');

	//let obj = $('.nav-vmv a:c')

	let $nav_vmv = $('.nav-vmv a');

	$nav_vmv.each(function (index) {
		let text = this.innerText;
		//console.log('index: ' + index);
		//console.log('text: ' + text);

		//console.log();

		//.active-vmv

		
		if (text === title) {
			//console.log('true');
			$nav_vmv.eq(index).addClass('active-vmv');}
			//$('.nav-vmv a')[index].css('color', 'red');
		else {
			//console.log('false');
		}
	});


	//console.dir($('.nav-vmv a'));


}

$('#getAjax').on('click', function (e) {

	console.log('getAjaxButton');

	//$content.append("<p>VMV Content</p>");
	//$('<p>').append('VMV Content 2').appendTo($content);

	//return;
	$.ajax({
		type: "GET",
		//url: "/Home?handler=Ajax",
		url: "/Home/OnGetAjax",
		contentType: "application/text",
		dataType: "text",
		success: function (response) {

			let _responseText = response;
			let $content = $('#content');
			$('<p>').append(_responseText + ' myfile.js').appendTo($content);

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
});
