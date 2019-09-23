import { Galactic } from './../galactic.js';

describe('Being', function (){

  it('should create an instance of the object', function () {
    let age = new Galactic(10);
    expect(age).toEqual(10);
  });

  it ('should return age in years from age on Earth', function () {
    let dob = new Galactic (new birthday(1985, 11, 29));
    let currentDate = new Date();
    let currentYear = currentDate.getUTCFullYear();
    let ageOnEarth = currentYear - (dob.getFullYear());
  expect(age).toEqual(33);
  });

  it ('should calculate years to death on Earth', function() {
    let dob = new Galactic (new birthday(1985, 11, 29));
    let currentDate = new Date();
    let currentYear = currentDate.getUTCFullYear();
    let age = currentYear - (dob.getFullYear());
    let earthYearsLeft = 100 - age();
  expect(earthYearsLeft).toEqual(67);
  });

  it ('should return age in years from age on Mercury', function (){
    let dob = new Galactic (new birthday(1985, 11, 29));
    let currentDate = new Date();
    let currentYear = currentDate.getUTCFullYear();
    let age = currentYear - (dob.getFullYear());
    let ageOnMercury = age/0.24;
    expect(ageOnMercury).toEqual(137.5);
  });

it ('should calculate tyears to death on Mercury', function(){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let yearsLeft = 100 - age ();
  let mercuryYearsLeft = yearsLeft/0.24
  expect(mercuryYearsLeft).toEqual(279);
});

it ('should return age in years from age on Venus', function (){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let ageOnVenus = age/0.62;
  expect(ageOnVenus).toEqual(53.2);
});

it ('should calculate years to death on Venus', function(){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let yearsLeft = 100 - age ();
  let venusYearsLeft = yearsLeft/0.62;
  expect(venusYearsLeft).toEqual(279);
});

it ('should return age in years from age on Mars', function (){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let ageonMars = age/1.88;
  expect(ageOnMars).toEqual(17.5);
});

it ('should calculate years to death on Mars', function(){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let yearsLeft = 100 - age ();
  let marsYearsLeft = yearsLeft/1.88;
  expect(marsYearsLeft).toEqual(35.6);
});

it ('should return age in years from age on Jupiter', function (){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let ageOnJupiter = age/11.86;
  expect(ageOnJupiter).toEqual(2.7);
});

it ('should calculate years to death on Jupiter', function(){
  let dob = new Galactic (new birthday(1985, 11, 29));
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let age = currentYear - (dob.getFullYear());
  let yearsLeft = 100 - age ();
  let jupiterYearsLeft = yearsLeft/11.86;
  expect(jupiterYearsLeft).toEqual(5.6);
});
