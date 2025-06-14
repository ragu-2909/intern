import mongoose from "mongoose";

const connectDB = async () => {
    

        
        await mongoose.connect("mongodb+srv://raghavendraashokkumbar:PBYglMDWgjzNWOk1@cluster0.tmnttqo.mongodb.net/");

        mongoose.connection.on('connected', () => {
            console.log('Database connected successfully.');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Database connection error: ${err}`);
        });
    
        
};

export default connectDB;