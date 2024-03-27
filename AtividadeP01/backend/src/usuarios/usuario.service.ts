import usuarioModel from './usuario.schema'

class UsuarioService {

    async create(usuarioJson: JSON) {
        return await usuarioModel.create(usuarioJson)
    }

    async findById(id: any) {
        return await usuarioModel.findById(id)
    }

    async findAll() {
        return await usuarioModel.find()
    }

    async update(id: any, usuarioJson: JSON) {
        return await usuarioModel.findByIdAndUpdate(id, usuarioJson)
    }

    async delete(id: any) {
        return await usuarioModel.findByIdAndDelete(id)
    }

    async findLogin(user: String) {
        return await usuarioModel.findOne({ username: user })
    }

    async findCustomId(ID: any) {
        return await usuarioModel.find({ usuarioID: ID })
    }

}

export default new UsuarioService()