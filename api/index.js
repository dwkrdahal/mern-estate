import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'; 

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000! ');
});
