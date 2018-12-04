var first_function = function(i) {
	console.log(i)
}
var array_of_functions = [];
for (i = 0; i < 10; i++) {	
	// 2nd answer
 array_of_functions.push(first_function.bind(null ,i+1))
}
array_of_functions[4]();