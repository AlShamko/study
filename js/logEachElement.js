/**
 * Цикл, массив
 */
let myArray = [1, 2, 3, 4, 5, 6, 7,];
console.log(myArray);

function logEachElement(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`[elem with index ${i}] is ${array[i]}`);
	}
}

logEachElement(myArray);

