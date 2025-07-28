
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// Print the result in 2 decimal places.
// **Sample Input:**
// 75.25, 65, 80, 35.45, 99.50
// **Sample Output:**
var marksMathematics=95;
var marksBiology=85;
var marksChemistry=93;
var marksPhysics=90;
var marksBangla=87;
var totalMarks;
totalMarks = marksMathematics + marksBiology + marksChemistry + marksPhysics + marksBangla;
console.log("Total Marks:", totalMarks);
var average = totalMarks / 5;
console.log("Average marks is:",average.toFixed(2));