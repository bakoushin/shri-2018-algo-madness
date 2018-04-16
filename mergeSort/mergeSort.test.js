const {expect} = require('chai');
const randomArray = require('random-array');
const sortFunction = require('./mergeSort');

describe('Merge sort', () => {

  it('Sould sort random array of numbers correctly', () => {
    const sampleArray = randomArray(1, 100).oned(100, {round: true});
    const testArray = sortFunction(sampleArray);
    sampleArray.sort((a, b) => a - b);
    expect(testArray).to.be.deep.equal(sampleArray);
  });

  it("Doesn't break already sorted array", () => {
    const sampleArray = randomArray(1, 100).oned(100, {round: true})
      .sort((a, b) => a - b);
    const testArray = sortFunction(sampleArray);
    expect(testArray).to.be.deep.equal(sampleArray);
  });

});
