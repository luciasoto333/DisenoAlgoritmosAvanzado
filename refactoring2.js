function gradeLabel() {
let grade = parseInt(prompt("Enter your grade"));
if (grade < 6 && grade >= 0) { 

console.log("Failed");
} else if (grade > 6 && grade <= 9) { 

console.log("Insufficient");
} else if (grade > 9 && grade <= 14) { 

console.log("Good");
} else if (grade == 15) { 


console.log("Excellent");
} else {
console.log("Error, outside of bounds") 

} return;
}
gradeLabel();