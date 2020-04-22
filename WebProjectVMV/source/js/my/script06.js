function checkUsername() {                                                                   // Объявляем функцию
	var elMsg = document.getElementById('feedback');                          // Получаем элемент обратной связи
	var elUsername = document.getElementById('username');               // Получаем имя, введенное пользователем
	if (elUsername.value.length < 5) {                                                        // Если имя пользователя слишком короткое
		elMsg.textContent = 'Username must be 5 characters or more';      // Указываем сообщение
	} else {                                                                                                      // Иначе
		elMsg.textContent = '';                                                                          // Сбрасываем сообщение
	}
}

//


onloadDoc();

function onloadDoc() {
	let userName = document.getElementById("username");
	userName.onblur = function() {
		console.log("Выход из username");
	}
}