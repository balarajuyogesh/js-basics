let num1 = window.prompt("Input your first integer for multiplication", "0"),
	num2 = window.prompt("Input your second integer for multiplication", "0"),
	num3 = window.prompt("Input your third integer for multiplication", "0");

let product = num1 * num2 * num3;

if( num1 > 0 && num2 > 0 && num3 >0 ) {
	console.log(`The sign is + and the product is ${product}`);
} else if( num1 < 0 && num2 < 0 && num3 > 0 ) {
	console.log(`The sign is + and the product is ${product}`);
} else if( num1 > 0 && num2 < 0 && num3 < 0 ) {
	console.log(`The sign is + and the product is ${product}`);
} else if( num1 < 0 && num2 > 0 && num3 < 0 ) {
	console.log(`The sign is + and the product is ${product}`);
} else {
	console.log(`The sign is - and the product is ${product}`);
} 