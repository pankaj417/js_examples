// findDifference(a1, a2) - returns the difference
// e.g.
// a1 = [3, 6, 8, 12, 4]
// a2 = [4, 6, 8, 12]
// Return 3

function findDifference(a1, a2) {
	var hasMapArray = {};
    var arrayLength1 = a1.length;
    var arrayLength2 = a2.length;
    var diffArray = [];
    for(var i = 0; i <=arrayLength1; i++) {
    	hasMapArray[a1[i]] = true;
    }
    for(var j = 0 ; j<=arrayLength2; j++ ) {
    	if(!hasMapArray[a2[j]]) {
        	diffArray.push(a2[j]);
        } else {
         delete hasMapArray[a2[j]];
        }
    }
	var hasMapKey;
    for(hasMapKey in hasMapArray) {
        diffArray.push(hasMapKey*1);
    }
    return diffArray;
    
}
function findDifference2(a1, a2) {
	for()
}

var a1 = [3, 6, 8, 12, 15];
var a2 = [4, 6, 8, ,9, 12, 20];
findDifference2(a1,a2);