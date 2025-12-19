import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    userOrder: {type: Object, default:{} }
}, {timestamps: true, minimize: false})

export const person = mongoose.model('person', personSchema)