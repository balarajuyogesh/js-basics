let num1 = parseInt(window.prompt("Enter the first number", "0")),
    num2 = parseInt(window.prompt("Enter the second number", "0"));

let range = function (num1, num2) {
  if (num2 - num1 === 0 || num2 - num1 ===1) {
    console.log(`There are no integers in between ${num1} and ${num2}`);
  } else if (num2 - num1 === 2) {
    return [num1 + 1]; 
  } else {
    let list = range(num1, num2 - 1);
    list.push(num2 - 1);
    return list;
  }
};

console.log(range(num1, num2));