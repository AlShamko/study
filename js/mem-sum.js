function add(num1, num2) {
  const arrayOne = Array.from(String(num1), Number).reverse();
	const arrayTwo = Array.from(String(num2), Number).reverse();
	let array = [];
	

	if (arrayOne.length >= arrayTwo.length) {
    length = arrayOne.length;
  } else {
    length = arrayTwo.length;
  }

 	for (let i = 0; i < length; i++) {
		const a = arrayOne[i] === undefined ? 0 : arrayOne[i];
    const b = arrayTwo[i] === undefined ? 0 : arrayTwo[i];
   array[i] = a + b;
}

	const result = array.reverse()
  return +result.join('')
}

console.log(add(43, 1))