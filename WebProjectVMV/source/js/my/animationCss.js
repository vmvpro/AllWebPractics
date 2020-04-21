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