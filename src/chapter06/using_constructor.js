function Dog(type) {
  this.type = type;
}

Dog.prototype.speak = function (line) {
  console.log(`The ${this.type} dog says ${line}`);
};

const dog = new Dog("funny");
dog.speak("Woof!");
