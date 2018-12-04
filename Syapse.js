// 1. Reverse a string  part 1
function reversify(str) {
	return str.split('').reverse().join('');
}
console.log(reversify('some crazy string'));

// Took approx 2 minutes to write it

// 1. Reverse a string  part 2
function reversifyOnlySequenceOfWords(str) {
	var inputArray =  str.split(' ');
  var outPurArray = [];
  for(var i = inputArray.length-1; i>=0; i-- ) {
  	outPurArray.push(inputArray[i]);
  }
  return outPurArray.join(' ');
}
console.log(reversifyOnlySequenceOfWords('some crazy string'));
// Took approx 3 minutes



// 2. Create a “native” method 
String.prototype.repeatify = function(num){
	var output = '';
  var inpitString = this.valueOf();	
  for(var i = 0; i<num; i++) {
		output+=inpitString
  }
  return output;
}

console.log('hello'.repeatify(3));
// Logic was simple but took approx 10-12 minutes to find out a way.



// 3. Needle in a Haystack
function finder(needle, Haystack) {
	const needleLength = needle.length;
  for (var h = 0; h < Haystack.length; h++) {
    for (var n = 0; n < needleLength; n++) {
      if (Haystack[h+n] !== needle[n]) {
        break;
      }
      if (n === needleLength - 1) {
        return h;
      } 
    }
  }
   return -1;
}

console.log(finder('dog', 'I like to walk my dog on the beach.'));
console.log(finder('ababc', 'abababc'));

// Took approx 15 minutes to write it
// Time Complexity would be O(n).

// 4. Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome 

function isPalindrome (inputStr) {
	return inputStr.split('').reverse().join('') === inputStr ? true : false; 
}

// I am considering char 'A' is not equal to char 'a' : function will consider string case sensitive
console.log(isPalindrome('nitin'));

// Took approx 2 minutes to write it
