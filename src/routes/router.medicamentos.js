import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'

import { Medicamentos } from '../controllers/Medicamentos.js'
export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.get('/', Medicamentos.getMedicamentosless50unidades)
