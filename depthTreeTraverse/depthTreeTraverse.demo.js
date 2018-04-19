const depthTreeTraverse = require('./depthTreeTraverse');

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
};

console.log('Process parent first (good for copying whole tree):')
console.log(depthTreeTraverse.preorderTraverse(tree, []));

console.log('Get sorted list:')
console.log(depthTreeTraverse.inorderTraverse(tree, []));

console.log('Process children first (good for deleting nodes):')
console.log(depthTreeTraverse.postorderTraverse(tree, []));
