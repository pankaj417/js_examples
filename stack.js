function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

var stack1 =  new Stack();
stack1.push('one'); 
stack1.push('two');
stack1.push('three');

var stack2 =  new Stack();
stack2.push('one2'); 
stack2.push('two2');
stack2.push('three2');

console.log(stack2);
console.log(stack1);