import axios from "axios";
import { Request, Response } from "express";

// O primeiro 'data' se refere ao retorno da função da biblioteca axios, o segundo a propriedade do json da API da Marvel recuperado

class Api {
    async getData20192020(req: Request, res: Response) {
        try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/series/28064/comics?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9')
            return res.status(200).json(response.data.data)
        } catch (error) {
            return res.status(404).json('ERRO AO BUSCAR HQ`S DE 2019 - 2020: ' + error)
        }
    }

    async getData2015(req: Request, res: Response) {
        try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/series/19685/comics?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9')
            return res.status(200).json(response.data.data)
        } catch (error) {
            return res.status(404).json('ERRO AO BUSCAR HQ`S DE 2015: ' + error)
        }
    }

    /*====================================================================================================================================================================================*/

    async getComicData(req: Request, res: Response) {
        try {
            const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${req.params.id}?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9`)
            return res.status(200).json(response.data.data)
        } catch (error) {
            return res.status(404).json(`ERRO AO BUSCAR HQ ${req.params.id}: ` + error)
        }
    }
}

export default new Api()
