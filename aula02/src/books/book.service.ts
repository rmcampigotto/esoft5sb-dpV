import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        return bookModel.create(book)
    }

    async findById(id: any){
        return bookModel.findById(id) 
    }

    async findAll(){
        return bookModel.find() 
    }

    async update(){}

    async delete(){}
}
