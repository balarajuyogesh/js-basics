let num = window.prompt("Enter a number upto which you want to perform the divisibility check", "0");

for (let i=0; i<=num; i++) {
	if (i % 15 === 0){
		console.log(`${i}: Divisible by both 3 and 5`);
	} else if (i % 3 === 0){
		console.log(`${i}: Divisible by 3`);
	} else if (i % 5 === 0) {
		console.log(`${i}: Divisible by 5`);
	} else {
		console.log(`${i}`);
	}
}