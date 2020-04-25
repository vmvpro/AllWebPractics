$(function () {
	console.log('my scripts');
	start();
});

function start() {
	//$('#glava').text('AJAX');

	let $btn = $('#sendXML');
	//btn.text('click me');
	//console.dir(btn);

	$btn.on('click', function() {
		//console.log('click vmv');
		dataXML();


	});
}