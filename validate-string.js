
function validate(str) {
  var stack = [];
  var strArray = str.split(''); 
	for(var i=0; i<strArray.length; i++) {
   	if(stringHelper(strArray[i])) {
     	stack.push(strArray[i]);
     } else {
     	var lastCharIndex  = stack.length;
      if (stringHelper(stack[lastCharIndex-1]) === strArray[i]) {
       	stack.pop();
      } else {
stack.push(strArray[i]);
      break;
      }
     }
   }
   if(stack.length===0 && strArray.length>0) {return true; }
   else {return false;}
}
function stringHelper(char) {
 var stringMapper = {
 '{':'}',
 '[':']',
 '(':')'
 }
 if(stringMapper[char]) {
 	return stringMapper[char];
 } else {
 	return false;
 }
}
//console.log(validate('{[]}'));
//console.log(validate('[]{}')); // it should return true


// input string  [{]}
//console.log(validate('[{]}')); // it should return false


// input string  a[{}]
// console.log(validate('a[{}]')); // it should return false

// input string  ()[{}](){[]}
// console.log(validate('()[{}](){[]}')); // it should return true 
console.log(validate('}'));

var _ = require('underscore');

/* 
Write a function to determine whether a string is balanced. "Balanced" means that every opening parenthesis, square bracket, curly brace has a matching closing character, and that each pair of these is properly nested.

For example:
{ [ (  ) ] }     balanced
( { } ) { }     balanced
{ [ } ]     not balanced
 */

function validate(str) {
  if(str==='') {
    return true;
  }
  if(typeof str === 'undefined' || str===null ) {
    return false;
  }
  var stackVar = [];
  var strArray = str.split('');
  for(var i=0; i<strArray.length; i++) {
    if (stringHelper(strArray[i])) {
      stackVar.push(strArray[i])
    } else {
      var lastCharIndex = stackVar.length;
      if(stringHelper(stackVar[lastCharIndex-1]) === strArray[i]) {
        stackVar.pop();
      } else  {
        if(strArray[i]==='}' || strArray[i]===')' || strArray[i]===']') {
          stackVar.push(strArray[i]);
          break;
        }
      }
    }
  }
  if(stackVar.length ==0 && strArray.length>0) 
  {
    return true;
  } else {
    return false;
  }

}
// helper function to check the closing of bracket
function stringHelper(char) {
  var strMapper = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  if(strMapper[char]) {
    return strMapper[char]
  } else {
    return '';
  }
}

console.log(validate('{[()]}a') === true); 
console.log(validate('{ [ (   ] }') === false); 
console.log(validate('( { } ) { }') === true);
console.log(validate('{ [ } ]') === false);
console.log(validate('') === true); 
console.log(validate(' ') === true); 
console.log(validate('aaa  aa]') === false); 
console.log(validate(undefined) === false); 
console.log(validate(null) === false); 
