export default function getStudentIdsSum(list) {
  // Calculate the sum of student IDs in the list
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
