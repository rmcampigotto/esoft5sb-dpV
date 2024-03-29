import { Request, Response } from "express"
import tarefaService from "./tarefa.service"
import tarefa_status from "./enums/status.enum"

let status_array = new Array
status_array = Object.values(tarefa_status)

class TarefaController {

    async create(req: Request, res: Response) {
        try {
            if (!status_array.includes(req.body.status)) {
                return res.status(400).json("Status não existe!")
            }
            const tarefa = await tarefaService.create(req.body)
            return res.status(200).json(tarefa)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const returnAll = await tarefaService.findAll()
            return res.status(200).json(returnAll)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const returnById = await tarefaService.findById(req.params._id)
            return res.status(200).json(returnById)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const tarefa = await tarefaService.update(req.params._id, req.body)
            return res.status(200).json(tarefa)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const tarefaRemove = await tarefaService.delete(req.params._id)
            return res.status(200).json(tarefaRemove)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findCustomId(req: Request, res: Response) {
        try {
            const tarefa = await tarefaService.findCustomId(req.params.ID)

            if (tarefa == null) {
                return res.status(400).json('tarefaID NÃO ENCONTRADO!')
            }

            return res.status(200).json(tarefa)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findUsuarioId(req: Request, res: Response) {
        try {
            const usuarioTarefas = await tarefaService.findUsuarioId(req.params.userID)
            return res.status(200).json(usuarioTarefas)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findConcluidas(req: Request, res: Response) {
        try {
            const tarefaConcluidas = await tarefaService.findConcluidas()
            return res.status(200).json(tarefaConcluidas)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findPendentes(req: Request, res: Response) {
        try {
            const tarefaPendentes = await tarefaService.findPendentes()
            return res.status(200).json(tarefaPendentes)
        } catch (error) {
            return res.status(400).json(error)
        }
    }


}

export default new TarefaController()