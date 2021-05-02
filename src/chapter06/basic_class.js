class Dog {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} dog says ${line}`);
  }
}

const dog = new Dog("funny");
dog.speak("Woof!");
