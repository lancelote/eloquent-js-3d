const fizzBuzz = () => {
  for (let number = 1; number <= 100; number++) {
    let output = "";
    if (number % 3) output += "Fizz";
    if (number % 5) output += "Buzz";
    console.log(output || number);
  }
};

fizzBuzz();
