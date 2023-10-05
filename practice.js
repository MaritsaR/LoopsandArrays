// const cars = ["Honda", "Toyota", "Ford", "Subaru"];

// cars[0] = "Hyundai";
// cars.splice(2, 0, "Mercedes");
// cars[cars.length - 1] = "Audi";
// console.log(cars);

const theString = "There once was a donkey named Eeyore.";
let count = 0;

for (let i = 0; i < theString.length; i++) {
  if (theString[i].toLowerCase() === "e") count += 1;
}

console.log("There are ${count} Es in the sentence.");
