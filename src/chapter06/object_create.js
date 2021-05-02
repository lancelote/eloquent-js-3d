let protoDog = {
  speak(line) {
    console.log(`The ${this.type} dog says "${line}"`);
  },
};

const rabbit = Object.create(protoDog);
rabbit.type = "funny";
rabbit.speak("Woof!");
