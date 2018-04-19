const breadthTreeTraverse = require('./breadthTreeTraverse');

const tree = {
  value: "1",
  left: {
    value: "2",
    left: {
      value: "4",
      left: {
        value: "7",
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: "5",
      left: null,
      right: {
        value: "8",
        left: {
          value: "11",
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: "3",
    left: {
      value: "6",
      left: {
        value: "9",
        left: null,
        right: null
      },
      right: {
        value: "10",
        left: null,
        right: null
      }
    },
    right: null
  }
};

console.log(breadthTreeTraverse(tree));
