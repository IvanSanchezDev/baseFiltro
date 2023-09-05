import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'

import { Recetas } from '../controllers/Recetas.js'
export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.get('/getRecetasAfter1Enero', Recetas.getRecetasAfter1Enero)
