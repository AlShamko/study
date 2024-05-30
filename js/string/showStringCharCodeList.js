function showStringCharList (str) {
	for (let i = 0; i < str.length; i++) {
		console.log(` '${str[i]}' - '${str.charCodeAt(i)}'`);
	}
}

showStringCharList('Aa bB')