import mongoose, { Schema, model } from "mongoose";

const AutoIncrement = require('mongoose-sequence')

const usuarioSchema = new Schema({
    usuarioID: Number,
    username: { type: String, required: true },
    peso: { type: Number, required: true },
    senha: { type: String, required: true },
    email: { type: String, required: true }
}, {
    timestamps: true
})

usuarioSchema.plugin(AutoIncrement(mongoose), { inc_field: 'usuarioID' })

export default model('Usuarios', usuarioSchema)