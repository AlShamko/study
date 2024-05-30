function logSymbolByCharCodeList(charCodeList) {
	charCodeList.forEach((charCode) => {
		let symbol = String.fromCharCode(charCode);

		console.log(` [${charCode}] - '${symbol}'`);
	});
}

logSymbolByCharCodeList([88, 89, 90, 91, 92, 93, 94, 95, 96, 97])


  