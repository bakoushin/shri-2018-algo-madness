const {expect} = require('chai');
const breadthTreeTraverse = require('./breadthTreeTraverse');

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 8,
        left: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 10,
        left: null,
        right: null
      }
    },
    right: null
  }
};

describe('Breadth tree traverse', () => {

  it('Should process first layer first, then next layer, and so on', () => {
    expect(breadthTreeTraverse(tree)).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  
});
