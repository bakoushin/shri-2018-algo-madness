
// Process parent first (good for copying whole tree)
function preorderTraverse(node, array) {
  array.push(node.value);
  if (node.left) {
    preorderTraverse(node.left, array);
  }
  if (node.right) {
    preorderTraverse(node.right, array);
  }
  return array;
}

// Get sorted list: process left child, then parent, then right child
function inorderTraverse(node, array) {
  if (node.left) {
    inorderTraverse(node.left, array);
  }
  array.push(node.value);
  if (node.right) {
    inorderTraverse(node.right, array);
  }
  return array;
};

// Process children first (good for deleting nodes)
function postorderTraverse(node, array) {
  if (node.left) {
    postorderTraverse(node.left, array);
  }
  if (node.right) {
    postorderTraverse(node.right, array);
  }
  array.push(node.value);
  return array;
};


module.exports = {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse
};
