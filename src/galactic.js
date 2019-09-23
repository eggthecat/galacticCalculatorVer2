export class Galactic {
  constructor (age) {
    this.age = age;
  }

  ageOnEarth() {
    let date = new Date();
    let dateYear = date.getUTCFullYear();
    let age = DateYear - this.age.getFullYear();
    return (age);
  };

  earthYearsLeft() {
    return  100 - this.ageOnEarth;
  }

  ageOnMercury() {
    let age = this.ageOnEarth / 0.24;
    return (age);
  }

  mercuryYearsLeft() {
    return 100 / 0.24 - this.ageOnMercury;
  }

  ageOnVenus() {
    let age = this.ageOnEarth / 0.62
    return (age);
  }

  venusYearsLeft() {
    return 100 / 0.62 - this.ageOnVenus;
  }

  ageOnMars() {
    let age = this.ageOnEarth / 1.88;
    return (age);
  }

  marsYearsLeft() {
    return 100 / 1.88 - this.ageOnMars;
  }

  ageOnJupiter() {
    let age = this.ageOnEarth / 11.86;
    return (age);
  }

  jupiterYearsLeft() {
    return 100/11.86 - this.ageOnJupiter;
  }
}
