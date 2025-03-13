import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api';
import { dbConfig } from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(dbConfig.uri, dbConfig.options)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});