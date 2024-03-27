import mongoose from 'mongoose'
import tarefaModel from './tarefa.schema'

class TarefaService {
    async create(tarefaJson: JSON) {
        return await tarefaModel.create(tarefaJson)
    }

    async findById(id: any) {
        return await tarefaModel.findById(id)
    }

    async findAll() {
        return await tarefaModel.find()
    }

    async update(id: any, tarefaJson: JSON) {
        return await tarefaModel.findByIdAndUpdate(id, tarefaJson)
    }

    async delete(id: any) {
        return await tarefaModel.findByIdAndDelete(id)
    }

    async findCustomId(ID: any) {
        return await tarefaModel.find({ tarefaID: ID })
    }

    async findUsuarioId(userID: any) {
        return await tarefaModel.find({ usuarioID: userID })
    }
}

export default new TarefaService()