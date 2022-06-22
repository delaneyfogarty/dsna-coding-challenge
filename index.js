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


function filter(arr, callback){
  const newArr = [];
  for(let i=0; i < arr.length; i++) {
    const number = arr[i];
    const newItem = callback(number);
    if (newItem){
      newArr.push(number);
    }
    
  }
  console.log(newArr);
    return newArr
}

filter([2, 6, 5], x => x % 2 === 0);
filter([6, 17, 34], x => x % 17 === 0);