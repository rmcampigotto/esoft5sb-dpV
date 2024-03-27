import { Request, Response } from "express"
import tarefaService from "./tarefa.service"
import tarefa_status from "./enums/status.enum"

let status_array = new Array
status_array = Object.values(tarefa_status)

class TarefaController {

    async create(req: Request, res: Response) {
        try {
            if (!status_array.includes(req.body.status)) {
                return res.json("Status não existe")
            }
            const tarefa = await tarefaService.create(req.body)
            return res.json(tarefa)
        } catch (error) {
            return error
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const returnAll = await tarefaService.findAll()
            return res.json(returnAll)
        } catch (error) {
            return error
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const returnById = await tarefaService.findById(req.params._id)
            return res.json(returnById)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response) {
        try {
            const tarefa = await tarefaService.update(req.params._id, req.body)
            return res.json(tarefa)
        } catch (error) {
            return error
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const tarefaRemove = await tarefaService.delete(req.params._id)
            return res.json(tarefaRemove)
        } catch (error) {
            return error
        }
    }

    async findCustomId(req: Request, res: Response) {
        try {
            const tarefa = await tarefaService.findCustomId(req.params.ID)
            return res.json(tarefa)
        } catch (error) {
            return error
        }
    }

    async findUsuarioId(req: Request, res: Response) {
        try {
            const usuarioTarefas = await tarefaService.findUsuarioId(req.params.userID)
            return res.json(usuarioTarefas)
        } catch (error) {
            return error
        }
    }

    async findConcluidas(req: Request, res: Response) {
        try {
            const tarefaConcluidas = await tarefaService.findConcluidas()
            return res.json(tarefaConcluidas)
        } catch (error) {
            return error
        }
    }

    async findPendentes(req: Request, res: Response) {
        try {
            const tarefaPendentes = await tarefaService.findPendentes()
            return res.json(tarefaPendentes)
        } catch (error) {
            return error
        }
    }


}

export default new TarefaController()