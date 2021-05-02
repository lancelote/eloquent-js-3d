function speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

const whiteRabbit = { type: "white", speak };
const brownRabbit = { type: "brown", speak };

whiteRabbit.speak("Hello world!");
brownRabbit.speak("Hello world!");
