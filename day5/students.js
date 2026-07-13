const Students = require('./students');
const students = [
    { name: 'Alice', age: 20, marks: 85 },
    { name: 'Bob', age: 19, marks: 75 },
    { name: 'Charlie', age: 21, marks: 90 },
    { name: 'David', age: 18, marks: 60 },
    { name: 'Eve', age: 22, marks: 95 }
];

const studentNames = Students.getStusentNames(students);
console.log('Student Names:', studentNames);

const studentAges = Students.getStudentAges(students);
console.log('Student Ages:', studentAges);

const studentMarks = Students.getStudentMarks(students);
console.log('Student Marks:', studentMarks);

const passedStudents = Students.isPassed(students);
console.log('Passed Students:', passedStudents);

