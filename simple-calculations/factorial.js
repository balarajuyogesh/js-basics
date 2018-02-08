let num = window.prompt("Enter a number to find its factorial", "0")

function factorial(x){
	if (x === 0) {
		return 1;
	} 
	return x * factorial(x-1);
}

console.log(factorial(num));