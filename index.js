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

function filter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const newItem = callback(number);
    if (newItem) {
      newArr.push(number);
    }
  }
  console.log(newArr);
  return newArr;
}

filter([2, 6, 5], (x) => x % 2 === 0);
filter([6, 17, 34], (x) => x % 17 === 0);

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      return true;
    } else {
      return false;
    }
  }
}

const variable = every(myArray, (x) => x % 2 === 0);
const variable2 = every([4, 8, 12, 14], (x) => x % 2 === 0);
console.log(variable2);
console.log(variable);

function addPunctuation(punctuation) {
  return (string) => {
    return string + punctuation;
  };
}

const exclamation = addPunctuation("!!!")("hi");
console.log(exclamation);

function addFirst(element) {
  return (arr) => {
    return [element, ...arr];
  };
}

const addStart = addFirst("purple")(["red", "orange", "blue"]);
console.log("addStart", addStart);
const addNumber = addFirst(1)([2, 3, 4, 5]);
console.log("addNumber", addNumber);
