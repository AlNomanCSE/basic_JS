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

// let user = new Object();
user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

// console.log(Object.keys(user));
let numbers = [1, 2, 3, 4];
console.log(numbers.values());
// const x = function () {
//   return {
//     49: "Germany",
//     41: "Switzerland",
//     44: "Great Britain",
//     1: "USA",
//   };
// };

// console.log(x());

// let user = {
//   name: "John",

//   // for hint="string"
//   // toString() {
//   //   return `{name: "${this.name}"}`;
//   // },

//   // // for hint="number" or "default"
//   // valueOf() {
//   //   return `${this.money}`;
//   // },
// };

// let x = +prompt("Enter number");
// console.log(+"abc");

// console.log('Abdullah Al Noman!'.slice(5,-1));
// let obj = {
//   name: "John",
//   age: 30,
// };

// const map  = new Map(Object.entries(obj));
// console.log(Object.entries(obj));

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);
console.log(map.entries());
// console.log(Object.fromEntries(map));

// let set = new Set();

// console.log(set.__proto__);

// set.add({ name: "Al Noman" });
// console.log(set);

// let x = map.keys();
// // let y = Object.fromEntries(x);
// // let z  = Object.entries(y);
// console.log(Object.keys(map));
