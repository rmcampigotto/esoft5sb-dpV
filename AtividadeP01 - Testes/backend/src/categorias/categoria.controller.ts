import { Request, Response } from "express"
import categoriaService from './categoria.service'
import cores from "./enum/cores.enum"

let cores_array = new Array
cores_array = Object.values(cores)

class CategoriaController {

    async create(req: Request, res: Response) {
        try {
            if (!cores_array.includes(req.body.cor)) {
                return res.status(204).json('Cor não existente!')
            }
            const categoria = await categoriaService.create(req.body)
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const returnAll = await categoriaService.findAll()
            return res.status(200).json(returnAll)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const returnById = await categoriaService.findById(req.params._id)
            return res.status(200).json(returnById)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const categoria = await categoriaService.update(req.params._id, req.body)
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const categoriaRemove = await categoriaService.delete(req.params._id)
            return res.status(200).json(categoriaRemove)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findCustomId(req: Request, res: Response) {
        try {
            const categoria = await categoriaService.findCustomID(req.params.ID)

            if (categoria == null) {
                return res.status(204).json('categoriaID NÀO ENCONTRADO!')
            }

            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}

export default new CategoriaController()