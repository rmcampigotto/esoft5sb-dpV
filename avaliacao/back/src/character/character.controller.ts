import { Request, Response } from "express";
import characterService from "./character.service";
import axios from "axios";



class CharacterController {

    async getAndSaveAllCharacterInfo_2014_2015(req: Request, res: Response) {
        try {
            let object = {
                name: String,
                description: String,
                imageURL: String
            }

            let resultArray = new Array()
            const response = await axios.get('https://gateway.marvel.com/v1/public/series/18892/characters?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9')

            resultArray = response.data.data.results

            resultArray.forEach(async result => {
                object.name = result.name
                object.description = result.description
                // @ts-ignore
                object.imageURL = result.thumbnail.path + '/standard_fantastic.jpg'

                await characterService.create(object)
            })

            return res.status(200).json('Informações da saga Spider-Verse (2014 - 2015) obtidas com sucesso!')

        } catch (error) {
            return 'ERRO AO BUSCAR INFORMAÇÕES DOS PERSONAGENS: ' + error
        }
    }

    async getAndSaveAllCharacterInfo_2019_2020(req: Request, res: Response) {
        try {
            let object = {
                name: String,
                description: String,
                imageURL: String
            }

            let resultArray = new Array()
            const response = await axios.get('https://gateway.marvel.com/v1/public/series/28064/characters?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9')

            resultArray = response.data.data.results

            resultArray.forEach(async result => {
                object.name = result.name
                object.description = result.description
                // @ts-ignore
                object.imageURL = result.thumbnail.path + '/standard_fantastic.jpg'

                await characterService.create(object)
            })

            return res.status(200).json('Informações da saga Spider-Verse (2019 - 2020) obtidas com sucesso!')

        } catch (error) {
            return 'ERRO AO BUSCAR INFORMAÇÕES DOS PERSONAGENS: ' + error
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const character = await characterService.findById(parseInt(req.params.id))

            return res.status(200).json(character)
        } catch (error) {
            return res.status(404).json(`ERRO AO BUSCAR ID [${req.params.id}] : ` + error)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const consult = await characterService.findAll()

            return res.status(200).json(consult)
        } catch (error) {
            return res.status(404).json('ERRO AO CONSULTAR PERSONAGENS: ' + error)
        }
    }

}

export default new CharacterController()