export default function getStudentsByLocation(ListOfStudents, city) {
  return ListOfStudents.filter((item) => item.location === city);
}
