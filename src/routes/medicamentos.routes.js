import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'

import { Medicamentos } from '../controllers/Medicamentos.js'
export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.get('/getMedicamentosless50unidades', Medicamentos.getMedicamentosless50unidades)
routes.get('/getMedicamentosProveedorEspecifico', Medicamentos.getMedicamentosProveedorEspecifico)
routes.get('/getMedicamentosCaducanBefore1Enero', Medicamentos.getMedicamentosCaducanBefore1Enero)
