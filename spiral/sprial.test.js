const {expect} = require('chai');
const Spiral = require('./spiral');

spiral1 = '1';

spiral2 =
`1 2
4 3`;

spiral3 = 
`1 2 3
8 9 4
7 6 5`;

spiral4 =
` 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7`;

spiral5 =
` 1  2  3  4  5
16 17 18 19  6
15 24 25 20  7
14 23 22 21  8
13 12 11 10  9`;

spiral10 = 
`  1   2   3   4   5   6   7   8   9  10
 36  37  38  39  40  41  42  43  44  11
 35  64  65  66  67  68  69  70  45  12
 34  63  84  85  86  87  88  71  46  13
 33  62  83  96  97  98  89  72  47  14
 32  61  82  95 100  99  90  73  48  15
 31  60  81  94  93  92  91  74  49  16
 30  59  80  79  78  77  76  75  50  17
 29  58  57  56  55  54  53  52  51  18
 28  27  26  25  24  23  22  21  20  19`;

describe('Sprial n^2', () => {

  it('Should draw spiral for 1^2', () => {
    expect(new Spiral(1).toString()).to.be.equal(spiral1);
  });

  it('Should draw spiral for 2^2', () => {
    expect(new Spiral(2).toString()).to.be.equal(spiral2);
  });

  it('Should draw spiral for 3^2', () => {
    expect(new Spiral(3).toString()).to.be.equal(spiral3);
  });

  it('Should draw spiral for 4^2', () => {
    expect(new Spiral(4).toString()).to.be.equal(spiral4);
  });
  
  it('Should draw spiral for 5^2', () => {
    expect(new Spiral(5).toString()).to.be.equal(spiral5);
  });

  it('Should draw spiral for 10^2', () => {
    expect(new Spiral(10).toString()).to.be.equal(spiral10);
  });
  
});
