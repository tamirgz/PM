import React from 'react';
import EmployeeList from '../components/Employee/EmployeeList';

const Employees: React.FC = () => {
    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeList />
        </div>
    );
};

export default Employees;