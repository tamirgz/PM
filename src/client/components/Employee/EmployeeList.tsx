import React from 'react';
import Employee from './Employee';

interface EmployeeListProps {
    employees: Array<{
        id: number;
        name: string;
        role: string;
    }>;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <Employee name={employee.name} role={employee.role} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;