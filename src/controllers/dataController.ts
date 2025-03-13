// filepath: src/controllers/dataController.ts
import { Request, Response } from 'express';
import Data from '../models/dataModel';
export const getData = async (req: Request, res: Response) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
export const createData = async (req: Request, res: Response) => {
  const { name, value } = req.body;
  const newData = new Data({
    name,
    value,
  });
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
