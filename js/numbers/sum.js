/**
*   123 => 6  // (1+2+3)
*   202 => 4  // (2+0+2)
*   5   => 5  // 5
*/

let num = 123;

function getSumOfDigits(num) {
 // throw new Error('Not implemented');
 const arr = Array.from(String(num), Number);
 console.log(arr)
 let sum = 0;
 for (let i = 0; i < arr.length; i += 1) {
	 sum += arr[i];
 }
 return sum;
}

console.log(getSumOfDigits(num))