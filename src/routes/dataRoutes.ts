// filepath: src/routes/dataRoutes.ts
import express from 'express';
import { getData, createData } from '../controllers/dataController';
const router = express.Router();
router.get('/data', getData);
router.post('/data', createData);
export default router;
