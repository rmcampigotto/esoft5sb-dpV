import { Router } from 'express'
import categoriaController from './src/categorias/categoria.controller'

const routes = Router()
routes.get('/findAll', categoriaController.findAll)
routes.get('/findById/:id', categoriaController.findById)
routes.post('/uipdate/:id', categoriaController.update)
routes.delete('/delete/:id', categoriaController.delete)

export {
    routes
}