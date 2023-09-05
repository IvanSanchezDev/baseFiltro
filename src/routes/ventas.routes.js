import { Router } from 'express'
import routesVersioning from 'express-routes-versioning'
import { Ventas } from '../controllers/Ventas.js'

export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.get('/getVentasParacetamol', Ventas.getVentasParacetamol)
routes.get('/getTotalDineroRecaudado', Ventas.getTotalDineroRecaudado)
routes.get('/getVentasOctubre', Ventas.getVentasOctubre)
