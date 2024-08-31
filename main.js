// Higher Order Functions - Challenge

/*
  you can use 
  --,
  --_
  --space
  -- True => 1 => one time only in the code

  you can't use 
  -- numbers
  -- letters

  you must uer [ filter + map + reduce + your knowledge]
  -- order is not important
  all in one chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map((el) => (el !== "," ? el : ""))
  .filter((el) => isNaN(parseInt(el)))
  .reduce((acc, current) => acc + current)
  .slice(true, -isNaN(myString))
  .replaceAll("_", " ");

console.log(solution); // Elzero Web School

//****** Exercises on "map, filter, reduce" */

// ==========================================
// https://www.crocoder.dev/blog/map-filter-reduce-exercises/
// ==========================================
// You are given an array of objects representing a group of students,
// each with a name and an array of test scores. Your task is to use map,
// filter, and reduce to calculate the average test score for each student,
// and then return an array of objects containing only the students who have
// an average score above 90.
// ==========================================
const students = [
  { name: "Asmaa", scores: [60, 85, 92, 89, 79, 83] },
  { name: "Ebrahim", scores: [99, 68, 85, 79, 84, 94] },
  { name: "Ashraf", scores: [90, 95, 86, 92, 89, 91] },
  { name: "Ahmed", scores: [100, 100, 100, 64, 84, 79] },
  { name: "Elsayed", scores: [96, 99, 97, 86, 94, 88] },
  { name: "Amir", scores: [76, 86, 87, 79, 68, 92] },
  { name: "Nermeen", scores: [94, 83, 68, 93, 78, 64] },
  { name: "Hala", scores: [92, 93, 90, 84, 86, 96] },
  { name: "Momen", scores: [57, 65, 55, 79, 50, 65] },
  { name: "Safaa", scores: [75, 83, 92, 64, 97, 99] },
  { name: "Esmail", scores: [59, 53, 63, 67, 70, 63] },
  { name: "Farouk", scores: [70, 60, 73, 69, 85, 80] },
  { name: "Mohamed", scores: [90, 90, 94, 95, 96, 99] },
  { name: "fawaz", scores: [96, 84, 86, 91, 79, 81] },
  { name: "Ritaj", scores: [99, 93, 95, 96, 90, 91] }
];

// Use map to calculate the average test score for each student
let degreeAverag =students.map((stu)=>{
  let sum = stu.scores.reduce((acc,deg)=> acc + deg)
  return {name : stu.name , Averag :( sum /stu.scores.length).toFixed(1)}
})
console.log(degreeAverag)

// Use filter to only select students with an average above 90
let eminentStudent = degreeAverag.filter((st)=>st.Averag >90)
console.log(eminentStudent)
//=========================================









