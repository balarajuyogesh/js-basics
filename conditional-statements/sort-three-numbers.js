let num1 = window.prompt("Please enter the first number to sort", "0"),
	num2 = window.prompt("Please enter the second number to sort", "0"),
	num3 = window.prompt("Please enter the third number to sort", "0");

if(num1 > num2 && num1 > num3){
	if(num2 > num3){
		console.log(`${num1} > ${num2} > ${num3}`);
	} else{
		console.log(`${num1} > ${num3} > ${num2}`);
	}
} else if(num2 > num1 && num2 > num3){
	if(num3 > num1){
		console.log(`${num2} > ${num3} > ${num1}`);
	} else{
		console.log(`${num2} > ${num1} > ${num3}`);
	}	
} else {
	if(num1 > num2){
		console.log(`${num3} > ${num1} > ${num2}`);
	} else{
		console.log(`${num3} > ${num2} > ${num1}`);
	}
}