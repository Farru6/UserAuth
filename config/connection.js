import mongoose from 'mongoose';

export const connectDb = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    if(!connect)  {
        console.error('Database connection failed');
        process.exit(1);
    }
    console.log("MngoDB connected successfully");
}