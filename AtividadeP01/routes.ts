import { Router } from 'express'
import categoriaController from './src/categorias/categoria.controller'
import usuarioController from './src/usuarios/usuario.controller'
import tarefaController from './src/tarefas/tarefa.controller'

const routes = Router()

routes.get('/findAllCategoria', categoriaController.findAll)
routes.get('/findByIdCategoria/:id', categoriaController.findById)
routes.post('/createCategoria', categoriaController.create)
routes.put('/updateCategoria/:id', categoriaController.update)
routes.delete('/deleteCategoria/:id', categoriaController.delete)

routes.get('/findAllUsuario', usuarioController.findAll)
routes.get('/findByIdUsuario/:id', usuarioController.findById)
routes.post('/createUsuario', usuarioController.create)
routes.put('/updateUsuario/:id', usuarioController.update)
routes.delete('/deleteUsuario/:id', usuarioController.delete)

routes.get('/findAllTarefa', tarefaController.findAll)
routes.get('/findByIdTarefa/:id', tarefaController.findById)
routes.post('/createTarefa', tarefaController.create)
routes.put('/updateTarefa/:id', tarefaController.update)
routes.delete('/deleteTarefa/:id', tarefaController.delete)

export {
    routes
}