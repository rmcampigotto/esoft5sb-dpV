import { Router } from "express";
import api from "./api";

import characterController from "./character/character.controller";

const routes = Router()

routes.get('/comics20192020', api.getData20192020)
routes.get('/comics2015', api.getData2015)
routes.get('/comic/:id', api.getComicData)
routes.get('/characterInfo', characterController.getAndSaveAllCharacterInfo_2014_2015)

export {
    routes
}