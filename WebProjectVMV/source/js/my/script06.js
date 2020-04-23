//function checkUsername() {                                                                   // Объявляем функцию
//	var elMsg = document.getElementById('feedback');                          // Получаем элемент обратной связи
//	var elUsername = document.getElementById('username');               // Получаем имя, введенное пользователем
//	if (elUsername.value.length < 5) {                                                        // Если имя пользователя слишком короткое
//		elMsg.textContent = 'Ошибка!!! Имя должно состоять не менее с 6 символов';      // Указываем сообщение
//	} else {                                                                                                      // Иначе
//		elMsg.textContent = '';                                                                          // Сбрасываем сообщение
//	}
//}

////

////document.onload = onloadDoc();

////onloadDoc();

//function onloadDoc() {
//	let userName = document.getElementById("username");

//	//Test
//	//userName.onblur = function() {
//	//	console.log("Выход из username");
//	//}

//	userName.onblur = checkUsername();
//}

//---------------------------------------------

//var elUsername = document.getElementById('username');   // Получаем введенное имя пользователя
//var elMsg = document.getElementById('feedback');   // Получаем элемент для обратной связи

//function checkUsername(minLength) {                     // Объявляем функцию
//	if (elUsername.value.length < minLength) {            // Если имя пользователя слишком короткое
//		// Задаем сообщение об ошибке
//		elMsg.innerHTML = 'Имя пользователя должно содержать не менее ' + minLength + ' символов';
//	} else {                                             // Иначе
//		elMsg.innerHTML = '';                              // Сбрасываем сообщение
//	}
//}

//elUsername.addEventListener('blur', function () {        // Когда элемент выходит из фокуса
//	checkUsername(5);                                     // Здесь передаем аргументы
//}, false);

//--------------------------------------------------

//Использование слушателей событий
//function checkUsername() {
//	// Объявляем функцию
//	var elMsg = document.getElementById('feedback');

//	// Получаем элемент обратной связи
//	if (this.value.length < 5) {
//		// Если имя пользователя слишком короткое
//		elMsg.textContent = 'Ошибка!!! Имя пользователя должно содержать не менее 5 символов'; // Указываем сообщение
//	} else {

//		elMsg.textContent = '';                            // Сбрасываем сообщение
//	}
//}

//// Получаем имя, введенное пользователем
//var elUsername = document.getElementById('username');  
//// При выходе элемента из фокуса вызвать функцию checkuserName()
//elUsername.addEventListener('blur', checkUsername, false);

////var btnOk = document.getElementsByClassName("btnOk").item(0);
//var btnOk = document.getElementsByClassName("btnOk")[0];
//btnOk.addEventListener('click', function() {
//	alert("OK!!!");
//}, false);

//--------------------------------------------------
//Использование слушателей событий с объектом event

//function checkLength(e, minLength) {         // Объявляем функцию
//	var el, elMsg;              

//	// Получаем цель события
//	var curentObject = e.target; //username

//	// Получаем следующий смежный элемент этого элемента
//	// В нашем случае это div 
//	elMsg = curentObject.nextSibling;

//	if (el.value.length < minLength) {         
//		elMsg.innerHTML =
//			'Имя пользователя должно содержать не менее ' + minLength + ' символов';
//	} else {                                   
//		elMsg.innerHTML = '';                  
//	}
//}

//// Получаем имя, введенное пользователем
//var elUsername = document.getElementById('username');

//elUsername.addEventListener('blur',
//	function(e) {
//		 checkLength(e, 5);
//	},
//	// Захватываем на этапе всплывания
//	false);

//--------------------------------------------------

//var list = document.getElementById("shoppingList");

//list.addEventListener
//	("click",
//	function (e) {

//		// Получаем ссылку того элемента, по которому был сделан щелчок
//		let target = e.target; 
//		// Получаем соответствующий элемент из этого списка
//		let currentItem = target.parentNode;
//		// Получаем соответствующий список
//		let list = currentItem.parentNode;

//		//let currentChild = ""

//		if (currentItem.className === "complete") {
//			console.log("Удален");
//			list.removeChild(currentItem);

//			// запрещаем переходить куда либо по этой ссылке
//			e.preventDefault();                          
//		} else {
//			console.log("Нельзя удалять");
//		}

//		console.log(parentNode);
//		console.dir(parentNode);
//	}, false);

//--------------------------------------------------

//При загрузке документа, передать фокус на первый элелемент input
//window.addEventListener("load", function (e) {
//	let userName = document.getElementById("username");
//	userName.focus();
//}, false);

//Click Сообщение
// Создание HTML-разметки для сообщения
var msg = "<div class='header'><a id='close' href='#'>закрыть X</a></div>";
msg += '<div><h2>Техническое обслуживание</h2>';
msg += 'С 12 до 13 часов на сервере производится техническое обслуживание. ';
msg += 'Во время обслуживания могут происходить незначительные сбои в работе сайта.</div>';

var elNote = document.createElement('div');       // Создаем новый элемент
elNote.setAttribute('id', 'note');                // Добавляем идентификатор объявления
elNote.innerHTML = msg;                           // Добавляем сообщение
//document.body.appendChild(elNote);                // Записываем его на страницу

function dismissNote() {                          // Объявляем функцию
	document.body.removeChild(elNote);              // Удаляем объявление
}

// Получаем кнопку для закрытия объявления
//var elClose = document.getElementById('close');
// Нажимаем эту кнопку и закрываем объявление
//elClose.addEventListener('click', dismissNote, false);

//----------------------------------------------------------
//var text_ = document.getElementById("textArea");
//var counter_ = document.getElementById("counter");

//text_.addEventListener("keypress",
//	function (e) {
//		console.dir(text_);
//		console.dir(counter_);
//		console.dir(e);
//		//console.dir(e.target);

		
//		let count = text_.value.length + 1;
//		if (count > 5) {
//			e.preventDefault();
//		}

//		counter_.value = text_.value.length;
//	}, false);

//----------------------------------------------------

//--------------   РАБОТА С ФОРМОЙ   -----------------

var elForm, elSelectPackage, elPackageHint, elTerms;                                                                            // Объявляем переменные
elForm = document.getElementById('formSignup');                                                                    // Сохраняем элементы
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function checkTerms(event) {                                                                                                                // Объявляем функцию
	if (!elTerms.checked) {                                                                                                                           // Если флажок сброшен
		elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения.';                         // Отображаем сообщение
		event.preventDefault();                                                                                                                        // Не отправлять форму
	}
}
//Создаем слушатели событий: событие submit 
// вызывает checkTerms()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false); 

//----------------------------------------------------


