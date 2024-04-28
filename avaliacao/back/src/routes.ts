import { Router } from "express";
import api from "./api";

const routes = Router()

routes.get('/comics20192020', api.getData20192020)
routes.get('/comics2015', api.getData2015)
routes.get('/comic/:id', api.getComicData)

export {
    routes
}