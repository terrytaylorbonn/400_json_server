// filepath: src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db';
import dataRoutes from './routes/dataRoutes';
const app = express();
// Connect to database
connectDB();
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
app.use('/api', dataRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
