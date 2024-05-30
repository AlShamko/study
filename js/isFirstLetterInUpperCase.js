const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() === firstLetter;
};


console.log(isFirstLetterInUpperCase('marmont')); // false
console.log(isFirstLetterInUpperCase('Robb'));    // true