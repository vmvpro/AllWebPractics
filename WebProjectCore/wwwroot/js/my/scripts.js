$(function () {
	console.log('my scripts');
	send();
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