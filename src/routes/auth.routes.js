import { Router } from 'express'

import { Auth } from '../controllers/Auth.js'
import { registerValidator } from '../middlewares/validateDatos.js'
import { loginValidator } from '../middlewares/validateLogin.js'
export const routes = Router()

// const version = routesVersioning()

// routes.get('/medicamentos', [passport.authenticate('bearer', { session: false })], version({ '1.0.0': Medicamentos.getMedicamentosless50unidades }))

routes.post('/register', registerValidator, Auth.Register)
routes.post('/login', loginValidator, Auth.Login)
