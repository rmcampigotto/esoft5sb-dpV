import { Request, Response } from "express"
import categoriaService from './categoria.service'
import cores from "./enum/cores.enum"

let cores_array = new Array
cores_array = Object.values(cores)

class CategoriaController {

    async create(req: Request, res: Response) {
        try {
            if (cores_array.includes(req.body.cor)) {
                const categoria = await categoriaService.create(req.body)
                return res.json(categoria)
            } else {
                return res.json('Cor não existente!')
            }
        } catch (error) {
            return error
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const returnAll = await categoriaService.findAll()
            return res.json(returnAll)
        } catch (error) {
            return error
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const returnById = await categoriaService.findById(req.params._id)
            return res.json(returnById)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response) {
        try {
            const categoria = await categoriaService.update(req.params._id, req.body)
            return res.json(categoria)
        } catch (error) {
            return error
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const categoriaRemove = await categoriaService.delete(req.params._id)
            return res.json(categoriaRemove)
        } catch (error) {
            return error
        }
    }

}

export default new CategoriaController()