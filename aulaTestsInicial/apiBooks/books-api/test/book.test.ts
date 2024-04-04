import app from '../src/app'
import { describe, it } from '@jest/globals'
import bookModel from '../src/books/schemas/book.schema'
import * as request from 'supertest'

describe('Testando API de Livros', () => {

    it.skip("Deve inserir um livro no banco de dados", async () =>{
        const bookMock = {
            title: "Androides sonham com ovelhas elétricas?",
            author: "Philip K. Dick",
            ISBN: "123-A",
            price: 20.50
        }

        const response = await request.default(app).post('/books').send(bookMock)
        const findedBook = await bookModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(bookMock.title).toBe(findedBook?.title)
        expect(bookMock.author).toBe(findedBook?.author)
        expect(bookMock.ISBN).toBe(findedBook?.ISBN)
        expect(bookMock.price).toBe(findedBook?.price)
    })

    it('Deve buscar todos os livros no banco de dados', async () =>{
        const response = await request.default(app).get('/books')
        const totalBooksOnDatabase = await bookModel.countDocuments()

        expect(response.body.length).toEqual(totalBooksOnDatabase)
    })
})