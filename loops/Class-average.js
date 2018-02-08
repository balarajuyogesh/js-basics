let students = [
                  ["Maharani", 90], 
                  ["Maharaja", 70],
                  ["Sita", 80],
                  ["Ram", 80],
                  ["Ishitha", 65],
                  ["Dhruva", 100]
                ],
    grade = ["A", "B", "C", "D", "F"];            


let avgMarks = 0;

for(let i=0; i<students.length; i++){
  avgMarks += students[i][1];
  var avg = (avgMarks/students.length);
}

avgMarks = avgMarks/students.length;
console.log(`Average marks of students in a class: ${avgMarks}`);


if (avgMarks < 60) {
  console.log(`The grade is ${grade[4]}`);  
} else if (avgMarks < 70) {
  console.log(`The grade is ${grade[3]}`);
} else if (avgMarks < 80) {
  console.log(`The grade is ${grade[2]}`);
} else if (avgMarks < 90) {
  console.log(`The grade is ${grade[1]}`);
} else {
  console.log(`The grade is ${grade[0]}`);
}
