$(function () {
	console.log('my file: postServerInfo.js');

	loadDocument();
});

function loadDocument() {

	// Подписываемся на форме события input type submit
	$('#register').on('submit', function (e) {
		// Предотвращаем ее отправку
		e.preventDefault();
		console.log('submit');

		// Формируем парметрыиз формы для отправки
		var name = $('#name').val();
		var password = $('#password').val();
		var email = $('#email').val();

		$.ajax({
			//Метод Post на сервере
			url: "/Home/PostAjaxForm",
			contentType: "application/json; charset=utf-8",
			method: "POST",
			//---------------------------------------------
			// Предполагаемый токен аутентификации
			//beforeSend: function(xhr) {
			//	xhr.setRequestHeader("XSRF-TOKEN", "value");
			//},
			//$('input:hidden[name="__RequestVerificationToken"]').val());
			//---------------------------------------------
			// Сериализация в JSON
			data: JSON.stringify({
				Name: name,
				Password: password,
				Email: email
			}),
			// Ответ от сервера
			// (В нашем случае это будет список user-ов)
			success: function (data) {
				
				// ФОРМИРУЕМ СТРОКУ С НОВЫМ КОНТЕНТОМ 
				// (можно было бы также использовать работу с деревом DOM)
				var newContent = '';
				for (var i = 0; i < data.length; i++) { // Перебираем объекты
					newContent += '<div class="vmv-post">';
					newContent += '<p><b>' + data[i].name + '</b></p>';
					newContent += '</div>';
				}

				// Обновляем страницу с новым контентом
				//$('#newContentVMV').empty();
				//$('p').append('VMV').appendTo('#newContentVMV');

				document.getElementById('newContentVMV').innerHTML = newContent;

			},
			failure: function (response) {
				alert(response);
			}
		});
	});
}

//// Сериализуем ее данные
//var details = $('#register').serialize();         
//// Отправляем их с помощью $.post()
//$.post('register.php', details, function (data) { 
//	// Здесь выводим результат
//	$('#register').html(data);                    
//});

//function PostAjaxForm(e) {
//	$('#register').on('submit', function (e) {
//		var item1 = $('#txtItem1').val();
//		var item2 = $('#txtItem2').val();
//		var item3 = $('#txtItem3').val();

//		$.ajax({
//			url: "api/reservation",
//			contentType: "application/json; charset=utf-8",
//			method: "POST",

//			data: JSON.stringify({
//				clientName: this.elements["ClientName"].value,
//				location: this.elements["Location"].value
//			}),
//			success: function (data) {
//				addTableRow(data);
//			}
//		});
//	});
//}


// Испоьзуется когда необходимо отправить не по формуе, 
// па по элементу на странице
// Тогда и используется Token
//function PostAjaxForm(e) {
//	$('#register').on('submit', function (e) {           
//		var item1 = $('#txtItem1').val();
//		var item2 = $('#txtItem2').val();
//		var item3 = $('#txtItem3').val();
//		$.ajax({
//			type: "POST",
//			url: "/Home/PostAjaxForm"
//			//beforeSend: function (xhr) {
//			//	xhr.setRequestHeader("VMV-TOKEN",
//			//		$('input:hidden[name="__RequestVerificationToken"]').val());
//			},
//			data: JSON.stringify({
//				Item1: item1,
//				Item2: item2,
//				Item3: item3
//			}),
//			contentType: "application/json; charset=utf-8",
//			dataType: "json",
//			success: function (response) {
//				var dvItems = $("#dvPostItems");
//				dvItems.empty();
//				$.each(response, function (i, item) {
//					var $tr = $('<li>').append(item).appendTo(dvItems);
//				});
//			},
//			failure: function (response) {
//				alert(response);
//			}
//		});
//	})
//}

