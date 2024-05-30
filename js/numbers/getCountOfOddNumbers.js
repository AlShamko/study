function getCountOfOddNumbers(number) {
  const arr = [];
  let num = 0;
  if (number < 0) {
    num = number * -1;
  } else num = number;
  for (let i = 0; i <= num; i += 1) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr.length;
}


console.log(getCountOfOddNumbers(4))

// * 4  => 2
//  * 5  => 3
//  * 10 => 5
//  * 15 => 8