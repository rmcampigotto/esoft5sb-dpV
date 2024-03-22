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
}

export default new TarefaService()