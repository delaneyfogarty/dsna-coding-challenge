const myArray = [1, 6, 5];

function map(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newItem = callback(item);
    newArray.push(newItem);
  }
  console.log(newArray);
  return newArray;
}

map(myArray, (x) => x * 2);
map(myArray, (x) => x ** 2);
