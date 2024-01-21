// let xhr = new XMLHttpRequest();

// xhr.open("GET", "./user.json", true);

// xhr.onload = function () {
//   if (this.status == 200) {
//     let myData = JSON.parse(this.responseText);
//     console.log(myData);
//   }
// };
// xhr.send();

let person = {
  firstName: "Jhon",
  lastName: "Smith",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let p1 = {
  firstName: "XNJ",
  lastName: "SmSDith",
};

console.log(person.fullName.call(p1));
let definePerson = function (age, job) {
  console.log(this.fullName() + " is " + age + " : " + job);
};
// definePerson.call(person, 25, "FrontEnd Developer");
// definePerson.apply(person, [25, "FrontEnd Developer"]);

let getPerson = definePerson.bind(person,25);
// getPerson( 27, "IT");
// definePerson.bind(person, 25, "IT")()
getPerson("production");
