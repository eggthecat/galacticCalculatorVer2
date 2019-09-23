import { Being } from './src/galactic-calculator-ver-2.js';

describe('Being', function(){

  it('should test whether a birthday creates an instance of the Date object', function(){
    let test = new Date("11, 11, 2011");
    expect(test.getMonth).toEqual(11);
  });
});
