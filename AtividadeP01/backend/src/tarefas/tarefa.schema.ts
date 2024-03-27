import mongoose, { Schema, model } from 'mongoose'
import tarefa_status from './enums/status.enum'

const AutoIncrement = require('mongoose-sequence')

const tarefaSchema = new Schema({
    tarefaID: Number,
    titulo: String,
    descri: String,
    data_criacao: String,
    tipo: String,
    categoria: String,
    usuarioID: Number,
    status: { type: String, tarefa_status }
}, {
    timestamps: true
})

tarefaSchema.plugin(AutoIncrement(mongoose), { inc_field: 'tarefaID' })

export default model('Tarefas', tarefaSchema)