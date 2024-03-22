import { Schema, model } from 'mongoose'
import tarefa_status from './enums/status.enum'

const tarefaSchema = new Schema({
    ID: Number,
    titulo: String,
    descri: String,
    data_criacao: String,
    tipo: String,
    categoria_ID: Number,
    status: { type: String, tarefa_status }
}, {
    timestamps: true
})

export default model('Tarefas', tarefaSchema)