function OnClickVMV() {
	var lblVMV = $("#labelVMV");
	lblVMV.text("JS и Jquery - Работает");
}

//var el = document.getElementById("one");
//el.className = "cool";

function oneList() {
	selectedItem(0);
}

function twoList() {
	selectedItem(1);
}

function threeList() {
	selectedItem(2);
}

function fourList() {
	selectedItem(3);
}



function selectedItem(id) {
	clearClass();

	var page = document.getElementById("page");
	var tagUl = page.getElementsByTagName("ul")[0];

	var listItems = tagUl.getElementsByTagName("li");

	listItems[id].className = "cool";

}


function styleItemsChild() {
	//alert("styleItemsChild");

	var itemNext = item_.nextElementSibling;
	//itemNext.classList.add("cool");
	itemNext.setAttribute('class', 'hot cool');

	var itemPrevious = item_.previousElementSibling;
	itemPrevious.classList.add("complete");

	
}

function addElementDOM() {
	// Создаем новый элемент и сохраняем его в переменной.
	var newEl = document.createElement('li');

	// Создаем текстовый узел и сохраняем его в переменной.
	var newText = document.createTextNode('зернистый творог');

	// Прикрепляем новый текстовый узел к новому элементу.
	newEl.appendChild(newText);

	// Находим позицию, на которую должен быть поставлен новый элемент.
	var position = document.getElementsByTagName('ul')[0];

	// Ставим новый элемент на эту позицию.
	position.appendChild(newEl);
}


//--------------------------------------
$('li').mouseover(function (e) {
	e.stopPropagation();
	$(this).addClass('cool');
});

$('li').mouseout(function () {
	$(this).removeClass('cool');
});
//--------------------------------------

function boldFontItem() {
	var oneItem = item_.previousElementSibling;
	var em = oneItem.firstElementChild;

	em.style.fontWeight = "bold";

	console.dir(oneItem);

	//firstElementChild

}

// ------ NEXT-CHILD ------

var page_;
var tagUl_;
var item_;

loadDoc();

function loadDoc() {
	page_ = document.getElementById("page");
	tagUl_ = page_.getElementsByTagName("ul")[0];
	item_ = tagUl_.getElementsByTagName("li")[1];
	console.dir(item_);
}

function nextItem() {

	var itemNext = item_.nextElementSibling;
	if (itemNext == null) {
		item_ = item_.parentElement.firstElementChild;
		//console.log("item_ = " + item_);
		console.dir(item_);

	} else {
		console.dir(itemNext);
		item_ = itemNext;
	}
	

	
	//item.classList.add("cool");

	//console.dir(item.previousSibling);


}

//-------------------------

function clearClass() {
	var page = document.getElementById("page");
	var tagUl = page.getElementsByTagName("ul")[0];

	var listItems = tagUl.getElementsByTagName("li");

	for (var i = 0; i < listItems.length; i++) {

		listItems[i].className = "hot";

		if (i === 3) {

			if (listItems[i].classList.contains('hot')) {
				listItems[i].classList.remove('hot');
			}

			if (listItems[i].classList.contains('cool')) {
				listItems[i].classList.remove('cool');
			}

			//listItems[id].class.remove('hot');
			//listItems[id].class.remove('cool');
		}


	}


}

function addClassItem() {
	var page = document.getElementById("page");
	var tagUl = page.getElementsByTagName("ul")[0];

	var listItems = tagUl.getElementsByTagName("li");


	listItems[0].classList.add("cool");

}


function containsListItem() {
	//if (listItems[id].classList.contains('hot')) {
	//	//listItems[id].classList.remove('cool');
	//} else {
	//	listItems[id].classList.add('cool');
	//}
	//

	//console.log();
	//console.dir()
}

//-----------------------------------

function renameNameItem2() {
	let page = document.getElementById("page");
	let tagUl = page.getElementsByTagName("ul")[0];

	let listItems = tagUl.getElementsByTagName("li");

	console.dir(listItems[0]);
}

function add_P() {
	let itemOne = document.getElementById("one");

	let itemOneText = itemOne.textContent;

	let el = document.getElementById("scriptResultVMV");
	el.innerHTML = "<p>Абзац VMV добавлен</p>";
}



// --------- Определение текущего элемента списка -----------

curentItemList();

function curentItemList() {
	
	function highlightThis() {
		this.style.backgroundColor = 'yellow';
		alert(this.tagName);
		this.style.backgroundColor = '';
	}

	let page = document.getElementById("page");
	let tagUl = page.getElementsByTagName("ul")[0];

	let listItems = tagUl.getElementsByTagName("li");

	for (var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", messageItem, true);
		//elems[i].addEventListener("click", highlightThis, false);
	}
}

function messageItem() {
	let itemOne = document.getElementById("one");

	let itemOneText = itemOne.textContent;

	let el = document.getElementById("scriptResultVMV");

	//console.log(this);
	console.dir(this);

	el.innerHTML = "<p>" + this.innerHTML + "</p>";
	console.dir(el);

}

//УДАЛЕНИЕ АТРИБУТОВ
// Получаем первый элемент
//var firstItem = document.getElementById('one');    
// Если у него есть атрибут class
//if (firstItem.hasAttribute('class')) {
//	// Удаляем этот атрибут class
//	firstItem.removeAttribute('class');                         
//}

//Выполнение задачи
function taskAll05() {
	// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ К НАЧАЛУ И К КОНЦУ СПИСКА
	// Получаем элемент ul
	var list = document.getElementsByTagName('ul')[0];
	// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К КОНЦУ СПИСКА
	// Создаем элемент
	var newItemLast = document.createElement('li');
	// Создаем текстовый узел
	var newTextLast = document.createTextNode('деревенская сметана');
	// Добавляем текстовый узел к элементу
	newItemLast.appendChild(newTextLast);
	// Добавляем элемент к концу списка
	list.appendChild(newItemLast);      

	// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К НАЧАЛУ СПИСКА
	var newItemFirst = document.createElement('li');                                               // Создаем элемент
	var newTextFirst = document.createTextNode('белокочанная капуста');        // Создаем текстовый узел
	newItemFirst.appendChild(newTextFirst);                                                           // Добавляем текстовый узел к элементу
	// Добавляем элемент в начало списка
	list.insertBefore(newItemFirst, list.firstChild);
	// ДОБАВЛЯЕМ КЛАСС COOL КО ВСЕМ ЭЛЕМЕНТАМ СПИСКА

	let page = document.getElementById("page");
	let tagUl = page.getElementsByTagName("ul")[0];

	let listItems = tagUl.getElementsByTagName("li");

	// ДОБАВЛЯЕМ В ЗАГОЛОВОК ИНФОРМАЦИЮ О КОЛИЧЕСТВЕ ЭЛЕМЕНТОВ В СПИСКЕ
	var heading = document.querySelector('h2');                                                  // Элемент h2
	var headingText = heading.firstChild.nodeValue;                                           // Текст элемента h2
	var totalItems = listItems.length;                                                                     // Количество элементов li
	var newHeading = headingText + '<span>' + totalItems + '</span>';           // Контент
	heading.innerHTML = newHeading;                                                                // Обновляем h2

}