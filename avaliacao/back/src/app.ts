import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'
import cors from 'cors'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    private middleware(): void {
        this.express.use(express.json())
        this.express.use(cors({
            origin: ['http://localhost:3001', 'http://127.0.0.1:3001']
        }));
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/avaliacao')
            console.log('Database Connect: SUCCESFULL')
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

    private routes(): void {
        this.express.use(routes)
    }

}

export default new App().express