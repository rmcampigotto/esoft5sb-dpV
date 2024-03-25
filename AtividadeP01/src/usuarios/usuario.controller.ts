import { Request, Response } from "express";
import usuarioService from "./usuario.service";

class UsuarioController {

    async create(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.create(req.body)
            return res.json(usuario)
        } catch (error) {
            return error
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const returnAll = await usuarioService.findAll()
            return res.json(returnAll)
        } catch (error) {
            return error
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const returnById = await usuarioService.findById(req.params._id)
            return res.json(returnById)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.update(req.params._id, req.body)
            return res.json(usuario)
        } catch (error) {
            return error
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const usuarioRemove = await usuarioService.delete(req.params._id)
            return res.json(usuarioRemove)
        } catch (error) {
            return error
        }
    }

    async login(req: Request, res: Response) {
        let user = req.params.user
        let password = req.params.password
        try {
            const usuario = await usuarioService.findLogin(user)
            if (usuario?.senha === password) {
                return res.json('LOGIN REALIZADO COM SUCESSO!')
            } else {
                return res.json('USUARIO OU SENHA INCORRETOS')
            }
        } catch (error) {
            return error
        }
    }

}

export default new UsuarioController()