const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const newStudents = students.filter((student) => student.isPassed === true);
console.log(newStudents);
// Bonus :
newStudents.forEach((stud) => {
  console.log(
    `Bon travail ${stud.name} , tu as reussi le cours en ${stud.course}`
  );
});
