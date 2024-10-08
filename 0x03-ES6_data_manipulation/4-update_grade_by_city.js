export default function updateStudentGradeByCity(listOfStudents, city, grades) {
  const defaultGrade = { grade: 'N/A' };
  return listOfStudents
    .filter((item) => item.location === city)
    .map((el) => ({
      id: el.id,
      firstName: el.firstName,
      location: el.location,
      grade: (
        grades.filter((grade) => grade.studentId === el.id).pop()
        || defaultGrade
      ).grade,
    }));
}
