import mongoose, { Schema, model } from "mongoose";

const AutoIncrement = require('mongoose-sequence')

const usuarioSchema = new Schema({
    usuarioID: Number,
    username: String,
    peso: Number,
    senha: String,
    email: String
}, {
    timestamps: true
})

usuarioSchema.plugin(AutoIncrement(mongoose), { inc_field: 'usuarioID' })

export default model('Usuarios', usuarioSchema)