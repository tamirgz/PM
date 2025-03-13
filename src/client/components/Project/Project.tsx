import React from 'react';
import Task from '../Task/Task';

interface ProjectProps {
    name: string;
    description: string;
    tasks: Array<{ id: number; title: string; description: string; assignedTo: string }>;
}

class Project extends React.Component<ProjectProps> {
    render() {
        const { name, description, tasks } = this.props;

        return (
            <div className="project">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Tasks</h3>
                <div className="task-list">
                    {tasks.map(task => (
                        <Task key={task.id} {...task} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Project;