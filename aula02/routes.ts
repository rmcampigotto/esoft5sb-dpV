import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/findById/:id', bookController.findById)
routes.get('/findAll', bookController.findAll)
routes.post('/books', bookController.create)

export {
    routes
}