function getStusentNames(students) {
    const studentNames = [];
    for (let i = 0; i < students.length; i++) {
        studentNames.push(students[i].name);
    }
    return studentNames;
}
function getStudentAges(students) {
    const studentAges = [];
    for (let i = 0; i < students.length; i++) {
        studentAges.push(students[i].age);
    }
    return studentAges;
}   
function getStudentMarks(students) {
    const studentMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentMarks.push(students[i].marks);
    }
    return studentMarks;
}
function isPassed(students) {
    const passedStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 40) {
            passedStudents.push(students[i]);
        }
    }
    return passedStudents;
}   

module.exports = {
    getStusentNames,
    getStudentAges,
    getStudentMarks,
    isPassed
};
