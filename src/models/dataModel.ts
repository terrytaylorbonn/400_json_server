// filepath: src/models/dataModel.ts
import mongoose from 'mongoose';
const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});
const Data = mongoose.model('Data', DataSchema);
export default Data;
