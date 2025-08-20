import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tonangibhaskararao:Bhaskar123@cluster0.mhe2egh.mongodb.net/RESUME')
    .then(() => console.log('MongoDB connected successfully'))
}