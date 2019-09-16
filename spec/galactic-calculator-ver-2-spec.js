// Notes
// Primary Objectives
// √ Take a person age on Earth
// √ Find out how to collect age for functions
// √ Apply age to multiple functions to find out various outcomes
// √ Return age from Mercury @ 24/100 Earth years (fastest journey around sun)
// √ Return age from Venus @ 62/100 Earth years
// √ Return age from Mars @ 188/100 Earth years
// √ Return age from Jupiter @ 1186/100 Earth years (slowest journey around sun)
// √ For each planet return life left on planet with 'const lifeExpectancy = 100;' result must be either surplus or deficit, not 0.
// Secondary Obectives
// Apply orogress to additional objectives mentioned in
// https://epicenter.epicodus.com/courses/449/code_reviews/1861
// import { } from './../src/ .js';
//
// describe ('birthday', function ()
//
//   it ('should create an instance of a date object with var birthday', function(){
//     let test = new Date('11, 12, 2001');
//     expect(test.getMonth()).toEqual(11);
//   });
//   it ('should ')
// })

import { Being } from './galactic-calculator-ver-2.js';

describe('Being', function (){
  it('should create a being object', function ()
{
  const dob = new Being (new birthday(1985, 11, 29));
  expect(typeof birthday).toEqual(typeof new Being);
});
it ('should calculate age in years from a date', function ()
{
  const dob = new Being (new birthday(1985, 11, 29));
  const age = dob.getYear();
  expect(age).toEqual(35);
})
})
