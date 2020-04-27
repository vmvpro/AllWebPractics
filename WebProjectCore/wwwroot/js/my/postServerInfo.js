$(function () {
	console.log('my file: postServerInfo.js');

	loadDocument();
});

function loadDocument() {
	$('#register').on('submit', function (e) {
		// Предотвращаем ее отправку
		e.preventDefault();
		console.log('submit');

		var name = $('#name').val();
		var password = $('#password').val();
		var email = $('#email').val();

		console.log('name:' + name);
		console.log('password: ' + password);
		console.log('email:' + email);

		//return;
		$.ajax({
			url: "/Home/PostAjaxForm",
			contentType: "application/json; charset=utf-8",
			method: "POST",
			//beforeSend: function(xhr) {
			//	xhr.setRequestHeader("XSRF-TOKEN", "value");
			//},
			//$('input:hidden[name="__RequestVerificationToken"]').val());
			data: JSON.stringify({
				Name: name,
				Password: password,
				Email: email
			}),
			success: function (data) {
				//addTableRow(data);
				$('.submit-form').val(data);
				console.log(data);


			}
		});

		//// Сериализуем ее данные
		//var details = $('#register').serialize();         
		//// Отправляем их с помощью $.post()
		//$.post('register.php', details, function (data) { 
		//	// Здесь выводим результат
		//	$('#register').html(data);                    
		//});
	});

}

function PostAjaxForm(e) {
	$('#register').on('submit', function (e) {
		var item1 = $('#txtItem1').val();
		var item2 = $('#txtItem2').val();
		var item3 = $('#txtItem3').val();

		$.ajax({
			url: "api/reservation",
			contentType: "application/json; charset=utf-8",
			method: "POST",

			data: JSON.stringify({
				clientName: this.elements["ClientName"].value,
				location: this.elements["Location"].value
			}),
			success: function (data) {
				addTableRow(data);
			}
		});
	});


}


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

