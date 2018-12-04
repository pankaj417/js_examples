// function dfs_pre_order(root) {
//  	if(root === null) return;
//  	console.log(root.value)
//  	dfs_pre_order(root.left)
//  	dfs_pre_order(root.right)
// }
function postOrder(root) {
  if(root === null) return;
  var current = root
  var stack = []
  while(current !== null || stack.length>0) {
    if(current!==null) {
      stack.push(current)
      current = current.left;
    } else {
      var temp = stack[stack.length-1]
      if(temp.right === null) {
        temp = stack.pop();
        console.log(temp.value)
        while(stack.length>0 && stack[stack.length-1].right === temp) {
          temp = stack.pop();
          console.log(temp.value)
        }
      } else {
        current = temp.right;
      }
    }
  }
}
function preOrder(root) {
	if(root === null) return;
	var stack = []
	stack.push(root)
	while(stack.length>0) {
		current = stack.pop();
		console.log(current)
		if(current.right!==null) {
			stack.push(current.right)
		}
		if(current.left!==null) {
			stack.push(current.left)
		}
	}
}
// LCA LOWEST COMMON ANCESTOR
function LCA(root, n1, n2) {
	if(root.value > max(n1.value, n2.value)) {
		return LCA(root.left, n1, n2)
	} else if(root.value < min(n1.value, n2.value)) {
		return LCA(root.right, n1, n2)
	} else {
		return root.value;
	}
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


dfs_pre_order(Node);
