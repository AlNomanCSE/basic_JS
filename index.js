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

// console.log(Object.keys(user));

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

// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 4);
// console.log(map.entries());
// console.log(Object.fromEntries(map));

// let set = new Set();

// console.log(set.__proto__);

// set.add({ name: "Al Noman" });
// console.log(set);

// let x = map.keys();
// // let y = Object.fromEntries(x);
// // let z  = Object.entries(y);
// console.log(Object.keys(map));
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { width: w, height, title } = options;

// console.log(w);

// function showmA({ title = "Menu", width = 100, height = 200 } = {}) {
//   console.log(title, width, height);
// }
// showmA();

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };
// console.log(
//   JSON.stringify(meetup, ["number", "title", "participants"],4)
// );
// let json = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// console.log(JSON.parse(json).date);

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule,function(key,value){
//      if(key=='date'){
//       return new Date(value);
//      }
//      return value
// });

let user = {
  firstName: "John",
  func: (phrase) => {
    console.log(phrase + ", " + this.firstName);
  },
};

let us = function (phrase) {
  user.func.bind(phrase);
};

us("Hello! ");



