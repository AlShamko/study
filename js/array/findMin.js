/**
 * Поиск минимального значения 
 */
// let myArray = [1, 2, 3, 4, 5, 6, 7,];
let myArray = [5, -2, 'a'];

function findMin(array) {
	let min = array.length ? array[0] : 0;

	for (let i = 0; i < array.length; i++){
		if( array[i] < min) {
			min = array[i]
		}
	}
	console.log(` min is ${min}`)
}

findMin(myArray)