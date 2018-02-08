let a = 5,
	b = -1,
	c = 10,
	d = -9,
	e = 22;

if(a > b && a > c && a > d && a > e){
	console.log(`${a} is the largest amongst ${a}, ${b}, ${c}, ${d}, ${e}`);
} else if(b > a && b > c && b > d && b > e){
	console.log(`${b} is the largest amongst ${a}, ${b}, ${c}, ${d}, ${e}`);
} else if(c > a && c > b && c > d && c > e){
	console.log(`${c} is the largest amongst ${a}, ${b}, ${c}, ${d}, ${e}`);
} else if(d > a && d > b && d > c && b > e){
	console.log(`${d} is the largest amongst ${a}, ${b}, ${c}, ${d}, ${e}`);
} else {
	console.log(`${e} is the largest amongst ${a}, ${b}, ${c}, ${d}, ${e}`);
}	