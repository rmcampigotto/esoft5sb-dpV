import { Schema, model } from 'mongoose'
import cores from './enum/cores.enum'

const categoriaSchema = new Schema({
    ID: Number,
    nome: String,
    cor: { type: String, cores }
}, {
    timestamps: true
})

export default model('Categorias', categoriaSchema)
