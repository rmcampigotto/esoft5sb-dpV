import app from '../../app'
import { describe, it, afterAll, expect } from '@jest/globals'
import mongoose from 'mongoose'
import * as request from 'supertest'
import categoriaModel from '../categorias/categoria.schema'
import tarefaModel from '../tarefas/tarefa.schema'
import usuarioModel from '../usuarios/usuario.schema'

describe('/categoria endpoint', () => {

    it('Deve inserir uma categoria no banco de dados', async () => {
        const categoriaMock = {
            nome: 'Categoria Teste',
            cor: 'Vermelho'
        }

        const response = await request.default(app).post('/createCategoria').send(categoriaMock)
        const findedCategoria = await categoriaModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(response.body._id).toBeDefined()
        expect(categoriaMock.nome).toBe(findedCategoria?.nome)
        expect(categoriaMock.cor).toBe(findedCategoria?.cor)
    })

    it('Deve bucar todos as categorias no banco de dados', async () => {
        const response = await request.default(app).get('/findAllCategoria')
        const totalOnDatabase = await categoriaModel.countDocuments()

        expect(response.body.length).toEqual(totalOnDatabase)
    })

    it.skip('Deve alterar uma categoria no banco de dados', async () => {
        const categoriaMock = {
            _id: '661ab7d90f631620e1988271',
            nome: 'Categoria Teste',
            cor: 'Verde'
        }

        const updateCategoria = await categoriaModel.findByIdAndUpdate(categoriaMock._id, categoriaMock)
        const response = await categoriaModel.findById(categoriaMock._id)

        expect(updateCategoria.cor).toBe(response.cor)
        expect(updateCategoria.nome).toBe(response.nome)
    })

})

describe('/usuario endpoint', () => {

    it('Deve inserir um usuario no banco de dados', async () => {
        const usaurioMock = {
            username: 'Usuario Teste',
            peso: 56.3,
            email: 'teste@email.com',
            senha: 'Senha teste'
        }

        const response = await request.default(app).post('/createUsuario').send(usaurioMock)
        const findedUsuario = await usuarioModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(response.body._id).toBeDefined()
        //@ts-ignore
        expect(usaurioMock.username).toBe(findedUsuario?.username)
        //@ts-ignore
        expect(usaurioMock.peso).toBe(findedUsuario?.peso)
        //@ts-ignore
        expect(usaurioMock.email).toBe(findedUsuario?.email)
        //@ts-ignore
        expect(usaurioMock.senha).toBe(findedUsuario?.senha)
    })

    it('Deve bucar todos os usuarios no banco de dados', async () => {
        const response = await request.default(app).get('/findAllUsuario')
        const totalOnDatabase = await usuarioModel.countDocuments()

        expect(response.body.length).toEqual(totalOnDatabase)
    })

    it.skip('Deve alterar um usuario no banco de dados', async () => {
        const usaurioMock = {
            _id: '661abe7135a533c94c83a79c',
            username: 'Usuario Teste',
            peso: 56.3,
            email: 'teste@email.com',
            senha: 'Senha teste'
        }

        const updateUsuario = await usuarioModel.findByIdAndUpdate(usaurioMock._id, usaurioMock)
        const findedUsuario = await usuarioModel.findById(usaurioMock._id)

        //@ts-ignore
        expect(updateUsuario.username).toBe(findedUsuario?.username)
        //@ts-ignore
        expect(updateUsuario.peso).toBe(findedUsuario?.peso)
        //@ts-ignore
        expect(updateUsuario.email).toBe(findedUsuario?.email)
        //@ts-ignore
        expect(updateUsuario.senha).toBe(findedUsuario?.senha)
    })

})

describe('/tarefa endpoint', () => {
    afterAll(async () => {
        await mongoose.connection.close()
    })

    it('Deve inserir uma tarefa no banco de dados', async () => {
        const tarefaMock = {
            titulo: 'Tarefa Teste',
            descri: 'Testando as rotas de tarefa',
            data_criacao: Date.now(),
            tipo: 'Teste',
            categoria: 'Categoria Teste',
            usuarioID: 1,
            status: 'em_andamento'
        }

        const response = await request.default(app).post('/createTarefa').send(tarefaMock)
        const findedTarefa = await tarefaModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(response.body._id).toBeDefined()
        //@ts-ignore
        expect(tarefaMock.titulo).toBe(findedTarefa?.titulo)
        //@ts-ignore
        expect(tarefaMock.descri).toBe(findedTarefa?.descri)
        //@ts-ignore
        expect(tarefaMock.tipo).toBe(findedTarefa?.tipo)
        //@ts-ignore
        expect(tarefaMock.categoria).toBe(findedTarefa?.categoria)
        //@ts-ignore
        expect(tarefaMock.usuarioID).toBe(findedTarefa?.usuarioID)
        //@ts-ignore
        expect(tarefaMock.status).toBe(findedTarefa?.status)
    })

    it('Deve bucar todos as tarefas no banco de dados', async () => {
        const response = await request.default(app).get('/findAllTarefa')
        const totalOnDatabase = await tarefaModel.countDocuments()

        expect(response.body.length).toEqual(totalOnDatabase)
    })

    it.skip('Deve alterar uma tarfea no banco de dados', async () => {
        const tarefaMock = {
            _id: '',
            titulo: 'Tarefa Teste',
            descri: 'Testando as rotas de tarefa',
            data_criacao: Date.now(),
            tipo: 'Teste',
            categoria: 'Categoria Teste',
            usuarioID: 1,
            status: 'em_andamento'
        }

        const updateTarefa = await tarefaModel.findByIdAndUpdate(tarefaMock._id, tarefaMock)
        const response = await tarefaModel.findById(tarefaMock._id)

    })

})