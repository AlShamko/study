function getRandomInteger(min, max) {
  const arr = [];
  for (let i = min; i <= max; i += 1) {
    arr.push(i);
  }
  return arr;
}

console.log(getRandomInteger(-5, -2));