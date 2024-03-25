import { Router } from 'express'
import categoriaController from './src/categorias/categoria.controller'
import usuarioController from './src/usuarios/usuario.controller'
import tarefaController from './src/tarefas/tarefa.controller'

const routes = Router()

routes.get('/findAllCategoria', categoriaController.findAll)
routes.get('/findByIdCategoria/:_id', categoriaController.findById)
routes.post('/createCategoria', categoriaController.create)
routes.put('/updateCategoria/:_id', categoriaController.update)
routes.delete('/deleteCategoria/:_id', categoriaController.delete)

routes.get('/findAllUsuario', usuarioController.findAll)
routes.get('/findByIdUsuario/:_id', usuarioController.findById)
routes.post('/createUsuario', usuarioController.create)
routes.put('/updateUsuario/:_id', usuarioController.update)
routes.delete('/deleteUsuario/:_id', usuarioController.delete)
routes.get('/loginUsuario/:user/:password', usuarioController.login)

routes.get('/findAllTarefa', tarefaController.findAll)
routes.get('/findByIdTarefa/:_id', tarefaController.findById)
routes.post('/createTarefa', tarefaController.create)
routes.put('/updateTarefa/:_id', tarefaController.update)
routes.delete('/deleteTarefa/:_id', tarefaController.delete)

export {
    routes
}