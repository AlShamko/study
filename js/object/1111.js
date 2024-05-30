let obj1 = {
	a: 1,
	b: 2,
}

let obj2 = {
	a: 2,
	c: 1,
}

function aaa(objA, objB) {
	let result = {}
	if (objA.length >= objB.length) {
    length = objA.length;
  } else {
    length = objB.length;
  }
	console.log(length)
	for(let i = 0; i < length; i++) {
		if(objA[i] === objB[i]) {
			console.log(objA[i] + objB[i])
		}
	}
}

console.log(aaa(obj1, obj2))