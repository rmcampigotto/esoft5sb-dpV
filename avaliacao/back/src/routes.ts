import { Router } from "express";
import api from "./api";

const routes = Router()

routes.get('/comics', api.getData)

export {
    routes
}