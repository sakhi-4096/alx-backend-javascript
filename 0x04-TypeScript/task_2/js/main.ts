// Define interfaces for Director and Teacher
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement classes for Director and Teacher based on the respective interfaces
export class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting a coffee break';
    workDirectorTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home';
    getCoffeeBreak = () => 'Cannot have a break';
    workTeacherTasks = () => 'Getting to work';
}

// Function to create an employee (either Teacher or Director) based on salary
export const createEmployee = (salary: number | string): Teacher | Director =>
    Number(salary) < 500 ? new Teacher() : new Director();

// Function to check if an employee is a Director
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work for an employee (either Director or Teacher)
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

// Define a type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on the subject for today's class
export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
}

// Example usage of teachClass function
console.log(teachClass("Math"));     // Output: Teaching Math
console.log(teachClass("History"));  // Output: Teaching History

