/* write a reduce function that takes as arguments:
    1. an array to process,
    2. a function to apply to each item in the array, and
    3. an initial value to seed the reduce callback
    
    this function will return the results of processing that array. To make this interesting, don't use the ES5 array methods like forEach, reduce, etc.

*/

function reduce (inputArray, func, intialVal) {
  
  for(var i=0; i<inputArray.length; i++) {
    intialVal = func(intialVal, inputArray[i]);
  }
  return intialVal
}

// example usage: 
var sum = reduce([1,2,3,4], function (total, num) {
  return total + num
}, 0) // == 10
console.log('sum: ', sum)

var people = reduce(
  [{name: 'John', age: 14}, { name: 'Sue', age: 20 }], 
  function (current, next) {
    current[next.name] = next.age;
    return current;
  }, {}); // == { 'John': 14, 'Sue': 20 }
console.log('people: ', people)

/* write a debounce function that takes as arguments:
    1. a function to debounce,
    2. the wait time in milliseconds before executing the debounced function

    the timer should reset every time the function is called.
*/

function debounce (func, interval) {
  var objt
  return  function(param) {
    clearTimeout(objt);
    objt = setTimeout(() => func.apply(this, arguments), interval);
  }
}

// example usage: 
function callAutocompleteApi (...params) {
  // taxing api call out to the autocomplete service
  console.log('called autocomplete', params)
}
var slowCall = debounce(callAutocompleteApi, 5000);
slowCall();
setTimeout(() => slowCall(1, 2, 3), 3000);
// function should now wait 8 secs to fire for the first time
