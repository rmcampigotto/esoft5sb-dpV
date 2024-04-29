import mongoose, { Schema, model } from 'mongoose'
const AutoIncrement = require('mongoose-sequence')

const characterSchema = new Schema({
    characterID: Number,
    name: { type: String, required: true },
    description: { type: String, requires: true },
    imageURL: { type: String, required: true }
}, {
    timestamps: true
})

characterSchema.plugin(AutoIncrement(mongoose), { inc_field: 'characterID' })

export default model('Characters', characterSchema)