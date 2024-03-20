import mongoose from 'mongoose'
import categoriaModel from './categoria.schema'

class CategoriaService {
    async create(book: any) {
        return await categoriaModel.create(book)
    }

    async findById(id: any) {
        return await categoriaModel.findById(id)
    }

    async findAll() {
        return await categoriaModel.find()
    }

    async update(id: any, categoriaJson: any) {
        return await categoriaModel.findByIdAndUpdate(id, categoriaJson)
    }

    async delete(id: any) {
        return await categoriaModel.findByIdAndDelete(id)
    }
}

export default new CategoriaService()