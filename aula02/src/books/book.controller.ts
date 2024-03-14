import { Request, Response } from 'express'
import bookService from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        try {
            const book = await bookService.create(req.body)
            return res.json(book)
        } catch (error) {
            return error
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const book = await bookService.findById(req.params)
            return res.json(book)
        } catch (error) {
            return error
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const book = await bookService.findAll()
            return res.json(book)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response) {
        try {
            const book = await bookService.update(req.params, req.body)
            return res.json(book)
        } catch (error) {
            return error
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await bookService.delete(req.params)
            return res
        } catch (error) {
            return error
        }
    }
}

export default new BookController()