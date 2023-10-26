// Task 1 : Rewrite the function as an arrow fonction
const greet = () => {
  alert("Hi there!");
};

// Task 2 : Adjust the arrow function
const greetWithOptions = (phrase = "Hi there!", name = "Laurent") => {
  const message = `${phrase} ${name}`;
  return message;
};

// Task 3 : Add a default argument
const greetWithOptions2 = (phrase = "Hi there!", name = "Laurent") => {
  const message = `${phrase} ${name}`;
  return message;
};

// Task 4 : Add a new function "checkInput"
const checkInput = (callback, ...strings) => {
  const isEmpty = strings.some((str) => str.trim() === "");
  if (isEmpty) {
    callback();
  }
};

const callbackFunction = () => {
  console.log('All input is non-empty');
}

checkInput(callbackFunction, 'Hello', 'Laurent', 'How are you?');
checkInput(callbackFunction, 'Hello', '', 'How are you?');
