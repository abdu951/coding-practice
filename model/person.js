import mongose from 'mongoose'

const personSchema = new mongose.Schema({
    name: String,
    age: Number,
    email: String
})

export const person = mongose.model('person', personSchema)