/* const { default: test } = require("node:test");

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const moreNumbers = new Array(5, 2);
console.log(moreNumbers);

const yetMoreNumbers = Array(1, 2);
console.log(yetMoreNumbers);

const yetMoreNumbers2 = Array.of(1, 2);
console.log(yetMoreNumbers2);

const soMoreNumbers = Array.from("Hello !");
console.log(soMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["Cooking", "Sports"];
const personalData = [41, "Laurent", { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);

const hobbies2 = ["Sports", "Cooking"];
hobbies2.push("Music");
hobbies2.unshift("Sports");
const poppedValue = hobbies2.pop();
hobbies2.shift();
console.log(hobbies2);

hobbies2.splice(0, 0, "good food");

const removedElements = hobbies2.splice(-1, 1);
console.log(removedElements);
console.log(hobbies2);

const results = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const storedResults = results.slice(0, 2);

results.push(5.91);

console.log(storedResults, results); */

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);


