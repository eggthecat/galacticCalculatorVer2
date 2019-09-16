
// class Being {
  constructor (birthday) {
    this.birthday = birthday;
  }

  get earthlingAge() {
    return this.ageOnEarth();
  }

  ageOnEarth() {
    let date = new Date();
    let dateYear = date.getYear();
    let age = (dateYear - this.birthDay);
    return (age);
  };

  earthYearsLeft() {
    return  100 - this.earthlingAge;
  }

  get mercurianAge() {
    return this.ageOnMercury();
  }

  ageOnMercury() {
    let age = this.ageOnEarth / 0.24;
    return (age);
  }

  mercuryYearsLeft() {
    return 100 / 0.24 - this.mercurianAge;
  }

  get venusianAge() {
    return this.ageOnVenus();
  }

  ageOnVenus() {
    let age = this.ageOnEarth / 0.62
    return (age);
  }

  venusYearsLeft() {
    return 100 / 0.62 - this.venusianAge;
  }

  get martianAge() {
    return this.ageOnMars();
  }

  ageOnMars() {
    let age = this.ageOnEarth / 1.88;
    return (age);
  }

  marsYearsLeft() {
    return 100 / 1.88 - this.martianAge;
  }

  get jupiterianAge(){
    return this.ageOnJupiter();
  }

  ageOnJupiter() {
    let age = this.ageOnEarth / 11.86;
    return (age);
  }

  jupiterYearsLeft() {
    return 100/11.86 - this.jupiterAge;
  }
}
