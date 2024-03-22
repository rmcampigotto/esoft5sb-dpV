import categoriaModel from './categoria.schema'

class CategoriaService {

    async create(categoriaJson: JSON) {
        return await categoriaModel.create(categoriaJson)
    }

    async findById(id: any) {
        return await categoriaModel.findById(id)
    }

    async findAll() {
        return await categoriaModel.find()
    }

    async update(id: any, categoriaJson: JSON) {
        return await categoriaModel.findByIdAndUpdate(id, categoriaJson)
    }

    async delete(id: any) {
        return await categoriaModel.findByIdAndDelete(id)
    }
}

export default new CategoriaService()