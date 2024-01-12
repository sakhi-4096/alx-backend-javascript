// Define an interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Sakhile",
    lastName: "Ndlazi",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Ze",
    lastName: "Ndlazi",
    age: 22,
    location: "San Francisco"
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");

// Iterate through each element in the array and append a new row to the table
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);

