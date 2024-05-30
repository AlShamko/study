const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};


function isPalindrome(str) {
  str = str.replace(/ /g, '');

  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }

  return true;
}


