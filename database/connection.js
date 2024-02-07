import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already connected to database.');
        return;
    }

    try {
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME
        })
        isConnected = true;
        console.log('Connected to database.');
    } catch (error) {
        console.error("Failed to connected to database.", error);
    }
}