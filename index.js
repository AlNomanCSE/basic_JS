let xhr = new XMLHttpRequest();

xhr.open("GET", "./user.json", true);

xhr.onload = function () {
  if (this.status == 200) {
    let myData = JSON.parse(this.responseText);
    console.log(myData);
  }
};
xhr.send();
