const {expect} = require('chai');
const randomArray = require('random-array');
const LinkedList = require('./LinkedList');

describe('Linked list', () => {

  it('Sould reverse linked list of random numbers correctly', () => {
    const sampleArray = randomArray(1, 100).oned(100, {round: true});

    let testList = new LinkedList(sampleArray)
    testList.reverse();

    sampleArray.reverse();
    const referenceList = new LinkedList(sampleArray);
    
    expect(testList).to.be.deep.equal(referenceList);
  });
 
});
