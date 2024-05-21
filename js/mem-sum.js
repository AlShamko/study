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

/**
 * second
 */

function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}

/**
 * 
 */