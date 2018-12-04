// how to write curry function

function doCurry(param1, param2) {
	if(typeof param2 === 'undefined') {
	 return function (param3) {
	 	console.log(param1, param3)
	 }
	}
	console.log(param1, param2)
}