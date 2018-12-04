function isBinarySearchTree(root) {
	if(root === null) {
		return true;
	}
	if(isSubtreeLesser(root.left, root.value) && isSubtreeGreater(root.right, root.value) && isBinarySearchTree(root.left) && isBinarySearchTree(root.right)) {
		return true;
	} else {
		return false;
	}

}
function isSubtreeLesser(root, value) {
	if()

}
function isSubtreeGreater(root, value) {

}