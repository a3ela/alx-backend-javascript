export default function getStudentIdsSum(ListStudents) {
  return ListStudents.reduce((acc, current) => acc + current.id, 0);
}
