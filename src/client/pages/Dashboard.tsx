import React from 'react';
import TaskList from '../components/Task/TaskList';
import ProjectList from '../components/Project/ProjectList';
import EmployeeList from '../components/Employee/EmployeeList';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Project Management Dashboard</h1>
            <section>
                <h2>Tasks</h2>
                <TaskList />
            </section>
            <section>
                <h2>Projects</h2>
                <ProjectList />
            </section>
            <section>
                <h2>Employees</h2>
                <EmployeeList />
            </section>
        </div>
    );
};

export default Dashboard;