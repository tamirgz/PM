import { Request, Response } from 'express';
import Employee from '../models/Employee';

// Get all employees
export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
};

// Create a new employee
export const createEmployee = async (req: Request, res: Response) => {
    const { name, role } = req.body;
    const newEmployee = new Employee({ name, role });

    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: 'Error creating employee' });
    }
};

// Update an employee
export const updateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, role } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, role }, { new: true });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: 'Error updating employee' });
    }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await Employee.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: 'Error deleting employee' });
    }
};