var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
var arrForEach = arr.forEach(functionForEach);

function functionForEach(item, index) {
  var infiniteValue = isFinite(arr)
  if (infiniteValue === false) {
    infiniteValue = "NOT Infinity";
  } else {
    infiniteValue = "Infinity"
  }
  arr[index] = "Angka " + item + " " + infiniteValue;
  console.log(arr[index]);
}