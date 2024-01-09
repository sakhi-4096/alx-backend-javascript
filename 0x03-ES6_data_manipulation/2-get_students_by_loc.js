export default function getStudentsByLocation(list, city) {
  // Filter the list of students based on the specified city
  return list.filter((obj) => obj.location === city);
}
