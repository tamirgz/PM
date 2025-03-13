export interface Employee {
    id: string;
    name: string;
    role: string;
}

export class EmployeeModel {
    private employees: Employee[] = [];

    constructor() {}

    public createEmployee(name: string, role: string): Employee {
        const newEmployee: Employee = {
            id: this.generateId(),
            name,
            role,
        };
        this.employees.push(newEmployee);
        return newEmployee;
    }

    public getEmployees(): Employee[] {
        return this.employees;
    }

    private generateId(): string {
        return (Math.random() * 100000).toFixed(0);
    }
}