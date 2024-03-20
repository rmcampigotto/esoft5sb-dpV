import { Schema, model } from 'mongoose'
import { cores } from './enum/cores.enum.ts'

const categoriaSchema = new Schema({
    id: Number,
    nome: String,
    cor: cores
},{
    _id: false,
    timestamps: true
})

export default model('Categorias', categoriaSchema)
