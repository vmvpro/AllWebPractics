$(function () {
	console.log('my file: postServerInfo.js');
	//send();
	//load();
});

function send_() {
	$('#register').on('submit', function (e) {           
		// Предотвращаем ее отправку
		e.preventDefault();                               
		// Сериализуем ее данные
		var details = $('#register').serialize();         
		// Отправляем их с помощью $.post()
		$.post('register.php', details, function (data) { 
			// Здесь выводим результат
			$('#register').html(data);                    
		});
	});

}

