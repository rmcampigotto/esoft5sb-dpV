import { Router } from "express";
import api from "./api";

import characterController from "./character/character.controller";

const routes = Router()

routes.get('/characterInfo2014_2015', characterController.getAndSaveAllCharacterInfo_2014_2015)
routes.get('/characterInfo2019_2020', characterController.getAndSaveAllCharacterInfo_2019_2020)
routes.get('/characterById/:id', characterController.findById)
routes.get('/characterAll', characterController.findAll)

export {
    routes
}