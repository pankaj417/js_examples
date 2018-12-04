// A semiprime is a positive integer number that is the product of two (not necessarily distinct) prime numbers.

// For a given n find the nth semiprime number.

// Example

// For n = 1, the output should be
// semiprimeByNumber(n) = 4;
// For n = 2, the output should be
// semiprimeByNumber(n) = 6.
// Input/Output

// [time limit] 4000ms (js)
// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 20.

// [output] integer

function semiprimeByNumber(n) {
    var multiple = [];
    for (var i = 2; i < 100; i++) {
		if (semiprime(i)) {
            console.log(i)
            multiple.push(i);
        }     
    }
    return multiple[n-1];
}
function semiprime(gg) {
 var f = 0;
  for (var p = 2; f < 2 && p*p <= gg; p++) {
      while (0 == gg % p)
        gg/= p,f++;
  }
  return f + (gg > 1) == 2;
}