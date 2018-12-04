// Turn list of lists into one list 


function list() {
	this.list = [];
}
list.prototype.listOfList = function(listArray) {
	var current = this;
	for (var i = 0; i<listArray.length; i++) {
		console.log(typeof listArray[i])
		if(typeof listArray[i] === 'string' || typeof listArray[i] === 'number') {
			this.list.push(listArray[i]);
        } else if(Array.isArray(listArray[i])) {
		console.log('coming here');
		 current.listOfList(listArray[i])
        }
    }
   return this.list
}
var list1Object = new list();

console.log(list1Object.listOfList(['a','b', ['c','d'], ['e'], 'f', ['g','h', ['i', 'j']]]));