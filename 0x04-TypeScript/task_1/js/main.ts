interface TeacherConfig {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows adding any additional attribute dynamically
}

class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
    private _additionalAttributes: { [key: string]: any } = {};

    constructor(config: TeacherConfig) {
        // Set initial values for firstName and lastName (modifiable only during initialization)
        this._firstName = config.firstName;
        this._lastName = config.lastName;

        // Set values for other attributes
        this._fullTimeEmployee = config.fullTimeEmployee;
        this._yearsOfExperience = config.yearsOfExperience;
        this._location = config.location;

        // Add additional attributes dynamically
        for (const key in config) {
            if (key !== 'firstName' && key !== 'lastName' &&
                key !== 'fullTimeEmployee' && key !== 'yearsOfExperience' && key !== 'location') {
                this._additionalAttributes[key] = config[key];
            }
        }
    }

    // Getter methods for attributes
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get fullTimeEmployee(): boolean {
        return this._fullTimeEmployee;
    }

    get yearsOfExperience(): number | undefined {
        return this._yearsOfExperience;
    }

    get location(): string {
        return this._location;
    }

    // Getter method for additional attributes
    get additionalAttributes(): { [key: string]: any } {
        return this._additionalAttributes;
    }
}

// Example usage:
const teacherConfig: TeacherConfig = {
    firstName: "Sakhile",
    lastName: "Ndlazi",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "School A",
    contract: true, // Additional attribute
    specialty: "Math", // Additional attribute
};

const teacher = new Teacher(teacherConfig);

console.log("Teacher Info:");
console.log("First Name:", teacher.firstName);
console.log("Last Name:", teacher.lastName);
console.log("Full Time Employee:", teacher.fullTimeEmployee);
console.log("Years of Experience:", teacher.yearsOfExperience);
console.log("Location:", teacher.location);
console.log("Additional Attributes:", teacher.additionalAttributes);

