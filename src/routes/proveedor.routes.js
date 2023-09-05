import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'
import { Proveedor } from '../controllers/Proveedor.js'

export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.get('/getMedicamentosByProveedor', Proveedor.getMedicamentosByProveedor)
