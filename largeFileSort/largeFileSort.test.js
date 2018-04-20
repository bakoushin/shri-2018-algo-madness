const {expect} = require('chai');
const randomArray = require('random-array');
const File = require('./File');
const largeFileSort = require('./largeFileSort');

describe('Large file sort', () => {

  it('Should sort file with random numbers correctly', () => {
    const sampleArray = randomArray(1, 100).oned(100, {round: true});
    const file = new File(sampleArray);
    sampleArray.sort((a, b) => a - b);
    expect(largeFileSort(file).toArray()).to.be.deep.equal(sampleArray);
  });

  it("Doesn't break already sorted file", () => {
    const sampleArray = randomArray(1, 100).oned(100, {round: true})
      .sort((a, b) => a - b);
    const file = new File(sampleArray);
    expect(largeFileSort(file).toArray()).to.be.deep.equal(sampleArray);
  });

});
