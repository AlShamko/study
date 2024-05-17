/**
 * Поиск среднего ар.
 */
let myArray = [1, 2, 3, 4, 5, 6, 7,];

function findAvg (array) {
	let sum = 0;

	for (let i = 0; i < array.length; i++){
		sum = sum + array[i]
	}
	let result = array.length ? sum / array.length : 0

	console.log(result)
}

findAvg (myArray)