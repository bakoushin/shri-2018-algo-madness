const {expect} = require('chai');
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

describe('Depth tree traverse', () => {

  it('Should process node first, then left child, then right', () => {
    const list = depthTreeTraverse.preorderTraverse(tree, []);
    expect(list).to.be.deep.equal([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
  });
 
  it('Should process left child, then right child and lastly the node itself', () => {
    const list = depthTreeTraverse.postorderTraverse(tree, []);
    expect(list).to.be.deep.equal([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
  });

  it('Should get sorted list of nodes', () => {
    const list = depthTreeTraverse.inorderTraverse(tree, []);
    expect(list).to.be.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  
});
