function bfs(root) {
  var q = [];
  if(root === null) return;
  q.push(root)
  q.push(null)
  var current = ''
  var count = 0;
  var output = []
  while(q.length>0) { 
    current = q.shift();
    if(current === null) {
      if(q.length>0) {
        q.push(null)
        count++
      }
    } else { 
      if(typeof output[count] === 'undefined') {
        output[count]=[]
      }
        output[count].push(current.value);
      
      if(current.left!== null) {
        q.push(current.left);
      }
      if(current.right!== null) {
        q.push(current.right);
      }
    }
  }
  output.map(function(value, key) {
    console.log(value.join(''))
  })
}
var Node = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: null,
      right: null
    },
    right: {
      value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: null,
      right: null
    },
    right: {
      value: 'G',
      left: null,
      right: null
    }
  }
}


bfs(Node)