//задание 1
function res(a, b, c) {
  return (a - b) / c;
}
let d = res(6, 2, 2);
console.log(d);
//задание 2
function res1(a) {
  return Math.pow(a, 2);
}
let f = res1(2);
console.log(f);

//задание 3

function MinMax(a, b) {
  if (a > b) {
    console.log("Максимальное значение " + a);
    console.log("Минимальное значение " + b);
  } else {
    console.log("Максимальное значение " + b);
    console.log("Минимальное значение " + a);
  }
}
MinMax(2, 6);
//задание 4
let j1 = +prompt("Введите исходное значение");
let j2 = +prompt("Введите конечное значение");
let array = [];
function createArray(j1, j2) {
  for (let i = j1; i <= j2; i++) {
    array.push(i);
  }
  console.log(array);
}
createArray(j1, j2);

//задание 5

function isEven(z) {
  if (z % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let z = isEven(50);
console.log(z);
//задание 6
let array1 = [1, 2, 3, 4];

function Arr1(arr) {
  let arr2 = [];
  for (let i = 0; i <= array1.length; i++) {
    if (isEven(array1[i]) == true) {
      arr2.push(array1[i]);
    }
  }
  console.log(arr2);
}
Arr1(array1);

//задание 7

function triangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      if (symbol) {
        line += symbol;
      } else {
        line += i.toString();
      }
    }
    console.log(line);
  }
}
triangle(9, "");

//задание 8
let height1 = +prompt("Введите значение");
function triangle1(height1) {
  for (let i1 = 0; i1 <= height1; i1++) {
    let line1 = "";
    for (let j1 = 0; j1 < i1; j1++) {
      line1 += "*";
    }
    line1 = line1;

    console.log(line1);
  }
}
triangle1(height1);

//перевернутый треугольник
let height2 = +prompt("Введите значение");
function triangle2(height2) {
  for (let i2 = height2; i2 >= 0; i2--) {
    let line2 = "";
    for (let j2 = i2; j2 > 0; j2--) {
      line2 += "*";
    }
    console.log(line2);
  }
}
triangle2(height2);

//задание 9

function fibanachi(number) {
  let arr = new Array(number);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibanachi(1000));
//задание 10

let p = "56";

function num(p) {
  let sum2 = 0;
  for (let i = 0; i < p.length; i++) {
    sum2 += +p[i];
  }
  if (sum2 > 9) {
    num(sum2.toString());
  } else {
    console.log(sum2);
  }
}
num(p);
//задание 11

function printArray(array) {
  console.log(array[i]);
  i++;
  if (i < array.length) printArray(array);
}
let i = 0;
printArray([890, 5, 6, 7, -8, 9, 78, 0]);
//задание 12

function people(hw, gr, name) {
  let hw = prompt("Введите название домашней работы");
  let gr = prompt("Введите номер группы");
  let name = prompt("Введите ФИО");
}
