function callback () {
    console.count("Throttled");
}
window.addEventListener("mousemove", throttle( callback, 2000 ));

// Implement a throttle function so  mouse move will work only after 2 seconds when we move mouse
// answer first start
function throttle (callback, limit) {
    var wait = false;                 // Initially, we're not waiting
    return function () {              // We return a throttled function
        if (!wait) {                  // If we're not waiting
            callback.call();          // Execute users function
            wait = true;              // Prevent future invocations
            setTimeout(function () {  // After a period of time
                wait = false;         // And allow future invocations
            }, limit);
        }
    }
}
// answer first emd

var first_function = function(i) {
	console.log(i)
}
var array_of_functions = [];
// 2nd answer start
for (i = 0; i < 10; i++) {	
 array_of_functions.push(first_function.bind(null ,i+1))
}
// 2nd answer end
array_of_functions[4]();