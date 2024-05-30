'use strict'
function combine(obj1, obj2) {
  // Your code here
  let arr = Object.assign( obj1, obj2 )
	return arr
}


console.log(combine({a:2, b:3}, {b:1}))