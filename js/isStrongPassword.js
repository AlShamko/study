const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

isStrongPassword('qwerty'); // false
isStrongPassword('qwerty1234'); // true
isStrongPassword('zxcvbnmasdfghjkqwertyui'); // false