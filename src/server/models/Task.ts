export interface Task {
    id: string;
    title: string;
    description: string;
    assignedEmployee: string;
    dueDate: Date;
    status: 'pending' | 'in-progress' | 'completed';
}

export class TaskModel {
    constructor(public task: Task) {}

    // Method to update task details
    updateTask(updatedTask: Partial<Task>) {
        this.task = { ...this.task, ...updatedTask };
    }

    // Method to mark task as completed
    completeTask() {
        this.task.status = 'completed';
    }
}