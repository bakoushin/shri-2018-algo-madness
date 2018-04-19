function breadthTraverse(tree) {

  let array = [];
  let queue = [];
  queue.push(tree);
  
  while(queue.length > 0) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return array;
  
}

module.exports = breadthTraverse;
