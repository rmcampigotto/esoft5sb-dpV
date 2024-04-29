import characterModel from "./character.schema";

class CharacterService {
    async create(characterJSON: any) {
        return await characterModel.create(characterJSON)
    }

    async findAll() {
        return await characterModel.find()
    }

    async findById(ID: Number) {
        return await characterModel.findOne({ characterID: ID })
    }

    async updateById(ID: Number, characterJSON: JSON) {
        return await characterModel.findOneAndUpdate({ characterID: ID }, characterJSON)
    }

    async deleteById(ID: Number) {
        return await characterModel.findOneAndDelete({ characterID: ID })
    }
}

export default new CharacterService()