import mongoose, { Schema, model } from 'mongoose'
import tarefa_status from './enums/status.enum'

const AutoIncrement = require('mongoose-sequence')

const tarefaSchema = new Schema({
    tarefaID: Number,
    titulo: { type: String, required: true },
    descri: { type: String, requires: true },
    data_criacao: { type: Date, required: true },
    tipo: { type: String, required: true },
    categoria: { type: String, required: true },
    usuarioID: { type: Number, required: true },
    status: { type: String, tarefa_status, required: true }
}, {
    timestamps: true
})

tarefaSchema.plugin(AutoIncrement(mongoose), { inc_field: 'tarefaID' })

export default model('Tarefas', tarefaSchema)