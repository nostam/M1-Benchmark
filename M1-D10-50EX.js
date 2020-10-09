const x = "John";
const y = "Doe";
console.log(`${x} <> ${y}`)

const obj = {
	name: "Harry",
	surname: "Doe",
	email: "harrydoe@test.com"
}

delete obj.email

const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

console.log(arr)

const randomDice = [];
for (let i = 0; i < 100; i++) {
	randomDice.push(Math.floor(Math.random() * 6 + 1))
}
console.log("Max: " + Math.max(...randomDice) + ", Min: " + Math.min(...randomDice))

let arrArr = [];

const oneToTen = function () {
	let tmp = [];
	for (let i = 0; i < 10; i++) {
		tmp.push(Math.floor(Math.random() * 10 + 1))
	}
	return tmp;
}

for (let i = 0; i < 10; i++) {
	arrArr.push(oneToTen());
}
console.log(arrArr);

// return longer arrray
const longer = function () {
	return (arrArr.length > randomDice) ? arrArr : randomDice
}
longer();

let sum = function (array) {
	return array.reduce((a, b) => a + b)
}

const sumArrArr = function (arrArr) {
	let total = 0;
	let tmp = [];
	for (let i = 0; i < arrArr.length; i++) {
		tmp.push(sum(arrArr[i]))
		total += sum(tmp)
	}
	return total;
}
const bigger = function () {
	let a = sum(randomDice);
	let b = sumArrArr(arrArr);
	return (a > b) ? a : b;
}

////////////////////////////////////////////////////////////
// DOM
////////////////////////////////////////////////////////////
window.onload = function () {
	// container ID
	document.querySelector('#container');
	// All td elements
	document.querySelectorAll('td');
	//
	const printTD = function () {
		let td = document.querySelectorAll('td');
		let tmp = [];
		for (let i = 0; i < td.length; i++) {
			tmp.push(td[i].innerText);
			console.log(tmp[i])
		}
		return tmp;
	}
	printTD();
	// new heading
	document.querySelector('h1').innerText = "Are you using firefox yet?"
	// new row
	const newTR = function () {
		let table = document.querySelector('#ex4');
		let row = table.insertRow(-1);
		let cell = row.insertCell(0);
		cell.colSpan = "5";
		let lastRow = document.querySelectorAll('.lastRow');
		for (let i = 0; i < lastRow.length; i++) {
			lastRow[i].classList.remove('lastRow');
		}
		cell.className = "lastRow";
		cell.innerText = "Text for new row";
	}
	newTR();
	// new class for tr
	const newTRClass = function () {
		let tr = document.querySelectorAll('tr');
		for (let i = 0; i < tr.length; i++) {
			tr[i].setAttribute('class', 'test');
		}
	}
	newTRClass();
	// link with red background
	const changeLinkBG = function () {
		let bg = document.querySelectorAll('a');
		for (let i = 0; i < bg.length; i++) {
			bg[i].style.backgroundSize = "contain";
			bg[i].style.backgroundRepeat = "no-repeat";
			bg[i].style.background = "red";
		}
	}
	changeLinkBG()
	// successfully loaded
	console.log("The page is successfully loaded.")
	// add new items
	const newUL = function (text) {
		let ul = document.querySelector('ul')
		let li = document.createElement('li')
		li.innerText = text;
		ul.appendChild(li);
	}
	newUL("new items 39a");
	newUL("new items 39b");
	newUL("new items 39c");
	const removeLast = function () {
		let ul = document.querySelector('ul')
		ul.removeChild(ul.lastChild);
	}
	// empty list
	const emptyList = function () {
		let length = document.querySelectorAll('li').length;
		for (let i = 0; i < length; i++) {
			removeLast();
		}
	}
	emptyList();

	///////////////////////////////////////////////////////////
	//  Extra
	///////////////////////////////////////////////////////////
	let a = document.querySelectorAll('a')
	for (let i = 0; i < a.length; i++) {
		a[i].addEventListener("mouseover", alert(a[i].href))
	}

	// hide image button
	const toggleImage = function () {
		let img = document.querySelectorAll('img');
		if (img[0].style.visibility === 'visible') {
			for (let i = 0; i < a.length; i++) {
				img[i].style.visibility = 'hidden'
			}
		} else if (img[0].style.visibility === 'hidden') {
			for (let i = 0; i < a.length; i++) {
				img[i].style.visibility = 'visible'
			}
		}
	}
	const myDiv = document.querySelector('#ex9');
	let imageButton = document.createElement('div');
	imageButton.innerText = "Hide all images";
	imageButton.className = "button";
	myDiv.appendChild(imageButton);
	imageButton.onclick = function (event) {
		for (let i = 0; i < a.length; i++) {
			let img = document.querySelectorAll('img');
			img[i].style.visibility = 'hidden'
		}
	}

	let imageToggle = document.createElement('div');
	imageToggle.innerText = "Toggle images";
	imageToggle.className = "button";
	myDiv.appendChild(imageToggle);
	imageToggle.onclick = function (event) {
		toggleImage();
	}

	const sumIfNumber = function () {
		let tr = document.querySelectorAll('tr');
		let total = 0;
		for (let i = 0; i < tr.length; i++) {
			if (typeof td[i].innerText === "number") {
				total += td[i].innerText;
			}
		}
		return total;
	}
}
