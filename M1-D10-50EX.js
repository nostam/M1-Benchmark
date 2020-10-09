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
