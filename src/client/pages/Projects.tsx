import React from 'react';
import ProjectList from '../components/Project/ProjectList';
import TaskList from '../components/Task/TaskList';
import EmployeeList from '../components/Employee/EmployeeList';

const Projects = () => {
    return (
        <div>
            <h1>Project Management</h1>
            <h2>Projects</h2>
            <ProjectList />
            <h2>Tasks</h2>
            <TaskList />
            <h2>Employees</h2>
            <EmployeeList />
        </div>
    );
};

export default Projects;