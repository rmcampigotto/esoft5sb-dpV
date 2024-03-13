import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById(req: Request, res: Response){
        const book = await new BookService().findById(req.params)
        return res.json(book)
    }

    async findAll(req: Request, res: Response){
        const book = await new BookService().findAll()
        return res.json(book)
    }

}

export default new BookController()