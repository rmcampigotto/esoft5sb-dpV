import { Schema, model } from 'mongoose'
import { cores } from './enum/cores.enum.ts'

const categoriaSchema = new Schema({
    ID: Number,
    nome: String,
    cor: cores
},{
    timestamps: true
})

export default model('Categorias', categoriaSchema)
