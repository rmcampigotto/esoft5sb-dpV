import bookModel from './book.schema'

export class BookService {
    static update: any
    static delete: any

    async create(book: any) {
        return await bookModel.create(book)
    }

    async findById(id: any) {
        return await bookModel.findById(id)
    }

    async findAll() {
        return await bookModel.find()
    }

    async update(id: any, book: any) {
        return await bookModel.findByIdAndUpdate(id, book)
    }

    async delete(id: any) {
        return await bookModel.deleteOne(id)
    }
}

export default new BookService()
