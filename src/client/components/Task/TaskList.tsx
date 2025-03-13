import React from 'react';
import Task from './Task';

interface TaskListProps {
    tasks: Array<{
        id: number;
        title: string;
        description: string;
        assignedTo: string;
        dueDate: string;
    }>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task 
                            title={task.title} 
                            description={task.description} 
                            assignedTo={task.assignedTo} 
                            dueDate={task.dueDate} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;