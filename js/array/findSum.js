/**
 * Поиск суммы 
 */
let myArray = [1, 2, 3, 4, 5, 6, 7,];

function findSum (array) {
	let sum = 0;

	for(let i = 0; i< array.length; i++) {
		sum += array[i] // sum = sum + array[i]
	}
	console.log(`sum = ${sum}`)
}

findSum (myArray)