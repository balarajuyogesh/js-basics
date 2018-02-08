
let num1 = window.prompt("Input your first integer for comparison", "0"),
	num2 = window.prompt("Input your second integer for comparison", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log(`The greater number is: ${num1}`);
} else if(parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log(`The greater number is: ${num2}`);
} else {
	
    console.log(`The numbers: ${num1} and ${num2} are equal`);
} 
