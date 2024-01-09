// Updating student grades based on city and new grades
export default function updateStudentGradeByCity(list, city, newGrade) {
  // Filter students by the specified city and update their grades
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrade.find((grade) => grade.studentId === student.id);

      // Update grade if a matching student ID is found
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      }

      // Set grade to 'N/A' if not already defined
      if (!student.hasOwnProperty('grade')) {
        student.grade = 'N/A';
      }

      return student;
    });
}
