let sum = 0;

for (let i =0; i<1000; i++) {
	if(i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}

console.log('Sum of the multiples of 3 and 5 '+ 
	`which are less than 1000 is: ${sum}`);