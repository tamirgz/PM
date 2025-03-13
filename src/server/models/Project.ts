export interface IProject {
    id: string;
    name: string;
    description: string;
    tasks: string[]; // Array of task IDs associated with the project
}

export class Project implements IProject {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public tasks: string[] = []
    ) {}

    // Method to add a task to the project
    addTask(taskId: string): void {
        this.tasks.push(taskId);
    }

    // Method to remove a task from the project
    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task !== taskId);
    }

    // Method to get project details
    getDetails(): object {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            tasks: this.tasks
        };
    }
}