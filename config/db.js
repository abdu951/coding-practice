import mongoose from "mongoose";

export const connectDb = async () => {
    
const MONGODB_URI = 'mongodb+srv://ab-mongo:hibret1923@cluster0.cxdsbro.mongodb.net/express'

    await mongoose.connect(MONGODB_URI).then(() => {
    console.log('database connected successfully')
})
}