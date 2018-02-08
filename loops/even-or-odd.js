let num1 = window.prompt("Please enter a number to check parity upto that number", "0");

for(let i=0; i<=num1 ; i++) {
	if(i % 2 === 0){
		console.log(`Parity of ${i} is even`);
	} else {
		console.log(`Parity of ${i} is odd`);
	}
}