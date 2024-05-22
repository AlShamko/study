function getHiddenCard(number, star = 4) {
	const starRepeat = '*'.repeat(star)
	const numberLength = number.toString().slice(-4);
	
	return starRepeat + numberLength
};

console.log(getHiddenCard(1111111111111))