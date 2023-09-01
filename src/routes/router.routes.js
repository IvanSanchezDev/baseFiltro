import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'
export const routes = Router()

const version = routesVersioning()

// EJEMPLO DE IMPLEMENTACION
routes.get('/', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': metodo }))
