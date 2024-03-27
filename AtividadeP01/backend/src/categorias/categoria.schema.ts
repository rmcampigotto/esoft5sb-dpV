import mongoose, { Schema, model } from 'mongoose'
import cores from './enum/cores.enum'

const AutoIncrement = require('mongoose-sequence')

const categoriaSchema = new Schema({
    categoriaID: Number,
    nome: String,
    cor: { type: String, cores }
}, {
    timestamps: true
})

categoriaSchema.plugin(AutoIncrement(mongoose), { inc_field: 'categoriaID' })

export default model('Categorias', categoriaSchema)
