function LookAndSay(start, n) {
	var startString = start.toString();
    var startLength = startString.length;
	var lastNumber = '';
	var lastCount = 0;
	var outputString = '';
	if(startLength>0) {
	    for(var i = 0; i<startLength; i++) {
	    	if(i==0 || lastNumber == startString[i]) {
	    		lastCount++;
	    		lastNumber = startString[i];
	    	} else {
	    		outputString+=lastCount+''+lastNumber
	    		lastCount=1;
	    		lastNumber = startString[i];
	    	}
	    	if(i==startLength-1) {
    			outputString+=lastCount+lastNumber
    		}
	    }
	    if(n>1) {
	    	LookAndSay(outputString, n-1)

	    } else {
	    	console.log(outputString)
	    	return outputString
	    }
	}

}
LookAndSay(11, 2)

// // Write a function to perform run-length encoding. E.g. convert aaaabbcccaeeeee => a4b2c3ae5.

// function shortString(bigString) {
//     var stringLength = bigString.length;
//     var outputString = '';
//     var lastCount = 0;
//     var lastNumber = '';
//     if( stringLength < 2) {
//         return bigString;
//     }
//     for (var i = 0 ; i<stringLength; i++) {
//         if(i==0 || lastNumber == bigString[i]) {
//             lastCount++;
//             lastNumber = bigString[i]
//         } else {
//             if(lastCount>1) {   
//                 outputString+=lastNumber+lastCount;
//             } else {
//                 outputString+=lastNumber;
//             }
//             lastCount = 1;
//             lastNumber = bigString[i]
//         }
//         if(stringLength-1 == i) {
//         }
//     }
//     console.log(outputString);
// }
// var bigString = 'aaaabbcccaeeeee';
// shortString(bigString)

// const str = 'abbccdddeeaa';
// 'a1b2c2d3e2a2'

// var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

// function myFunction() {
//   try { 
//     shortString(undefined)
//   } 
// }


// shortString(undefined) === ''
// length of the object
// Object.keys(person).length

function shortString(str) {
    if(str==='') {
      throw "string is empty"
    } else if (typeof str === 'undefined') {
      throw "string is undefined"
    }
      
    var stringLength = str.length;
    var outputString = '';
    var lastCount = 0;
    var lastChar = '';

    for(var i=0; i<stringLength; i++) {
      if(i===0 || lastChar === str[i]) {
        lastCount++;
        lastChar = str[i];
      } else {
        outputString+=lastChar+lastCount;
        lastCount=1;
        lastChar = str[i];
      }
    }
    outputString+=lastChar+lastCount;
    return outputString;
  // catch(err) {
  //   return err 
  // }
}

console.log(shortString('abbccdddeea'));
console.log(shortString(''));
console.log(shortString(undefined));
// console.log(shortString(4567));

