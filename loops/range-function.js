let num1 = parseInt(window.prompt("Enter the first number", "0")),
    num2 = parseInt(window.prompt("Enter the second number", "0"));

var range = function (num1, num2) {
  if (num2 - num1 === 2) {
    return [num1 + 1]; 
  } else {
    var list = range(num1, num2 - 1);
    list.push(num2 - 1);
    return list;
  }
};

console.log(range(num1, num2));