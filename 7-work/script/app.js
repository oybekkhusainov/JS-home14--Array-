let arr = [1, 4, 6, 9, 2, 10,45,200];

let newArr = arr.sort((a, b) => a - b);
let max = newArr[newArr.length - 1];
document.write(max);