// function sum([...arr]) {
//   console.log(arr);
// }
// let numbers = [1, 2, 3, 4];
// const result = sum(numbers);
// function createGreeter(greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// }
// const customGreet = createGreeter("Screw");
// customGreet("ScrewY");

let user = new Object();
let User = {};
user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

delete user["likes birds"];
console.log(user);
