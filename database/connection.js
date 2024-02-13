import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already connected to database.');
        return;
    }

    try {
        
        if (process.env.ENV === "test") {
            await mongoose.connect(process.env.DB_URI, {
                dbName: process.env.DB_NAME
            })
        } else {
            await mongoose.connect(process.env.DB_URI_PROD, {
                dbName: process.env.DB_NAME
            })
        }
        
        isConnected = true;
        console.log(`Connected to ${process.env.ENV === 'test' ? 'local' : 'remote'} database.`);
    } catch (error) {
        console.error("Failed to connected to database.", error);
    }
}