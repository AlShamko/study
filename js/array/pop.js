let myArray = [1, 2, 3, 4, 5, 6, 7,];
console.log(myArray)

const getLastValue = (array) => {
	const lastValue = array.pop();
	return lastValue;
}

console.log(getLastValue(myArray))
console.log(myArray)