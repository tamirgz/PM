import React from 'react';
import Project from './Project';

interface ProjectListProps {
    projects: Array<{
        id: string;
        name: string;
        description: string;
    }>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <h2>Project List</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <Project 
                            id={project.id} 
                            name={project.name} 
                            description={project.description} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;