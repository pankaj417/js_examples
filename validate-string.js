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
