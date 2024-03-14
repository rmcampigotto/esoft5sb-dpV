import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/findById/:id', bookController.findById)
routes.get('/findAll', bookController.findAll)
routes.post('/create', bookController.create)
routes.put('/update/:id', bookController.update)
routes.delete('/delete/:id', bookController.delete)

export {
    routes
}