/*
  Write a function that can take an array of asynchronous functions
  and wait for each one to finish before calling the next one
*/

function  doActions(list) {
  var noOfFunctions = list.length;
  //var counter = 0;
 
  if (noOfFunctions>0) {
    list[0](function () {doActions(list.slice(1));})
  }
  //if list is array or not 
  // for(var i =0; i<list.length; i++) {
  //   list[i](function());
  // }
}

// function doActions2(list, done) {
//   list[0](function() {
//     list[1](function() {
//       list[2](function() {
//         done()
//       });
//     });
//   });
// }

var first_function = function(i, callback) {
  setTimeout(function () {console.log(i); callback();},5000);
}
var array_of_functions = [];
for(var i = 0; i<3; i++) {
  array_of_functions.push(first_function.bind(null, i))
}
doActions(array_of_functions);
