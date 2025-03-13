// filepath: src/config/db.ts
import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ttbonn:Yourmama539@cluster-250313.toxjl.mongodb.net/jobs-db', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    process.exit(1);
  }
};
export default connectDB;
