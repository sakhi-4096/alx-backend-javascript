export default function getListStudentIds(list) {
  // Return an array of student IDs extracted from the input list
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return []; // Return an empty array if input is not an array
}
