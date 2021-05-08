class Dog {
  constructor(type) {
    this.type = type;
  }

  toString() {
    return `a ${this.type} dog`;
  }
}

const dog = new Dog("funny");
console.log(String(dog));
