function fun(...x) {
  x.forEach((e, i) => {
    console.log(i, e);
  });
}
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
fun(arr1, arr2);
