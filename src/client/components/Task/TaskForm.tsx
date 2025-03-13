import React, { useState } from 'react';

const TaskForm = ({ onSubmit, existingTask }) => {
    const [title, setTitle] = useState(existingTask ? existingTask.title : '');
    const [description, setDescription] = useState(existingTask ? existingTask.description : '');
    const [assignedEmployee, setAssignedEmployee] = useState(existingTask ? existingTask.assignedEmployee : '');
    const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, assignedEmployee, dueDate };
        onSubmit(taskData);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setAssignedEmployee('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div>
                <label>Assigned Employee:</label>
                <input 
                    type="text" 
                    value={assignedEmployee} 
                    onChange={(e) => setAssignedEmployee(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Due Date:</label>
                <input 
                    type="date" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                />
            </div>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;