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
