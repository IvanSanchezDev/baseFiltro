import express from 'express'
import { config } from 'dotenv'
import { routes as routesMedicamentos } from './routes/medicamentos.routes.js'
import { routes as routesVentas } from './routes/ventas.routes.js'
import { routes as routesRecetas } from './routes/recetas.routes.js'
import { routes as routesProveedor } from './routes/proveedor.routes.js'
import { routes as routesAuth } from './routes/auth.routes.js'
import passport from './middlewares/passport-http-bearer.js'
import { limitUsuario } from './middlewares/limit.js'
config()
const app = express()

app.use(express.json())

app.use('/medicamentos', [passport.authenticate('bearer', { session: false }), limitUsuario()], routesMedicamentos)
app.use('/ventas', [passport.authenticate('bearer', { session: false }), limitUsuario()], routesVentas)
app.use('/recetas', [passport.authenticate('bearer', { session: false }), limitUsuario()], routesRecetas)
app.use('/proveedor', [passport.authenticate('bearer', { session: false }), limitUsuario()], routesProveedor)
app.use('/auth', limitUsuario(), routesAuth)

app.use((req, res) => {
  res.status(400).json({ status: '400', message: 'Ruta no encontrada' })
})

const myserver = JSON.parse(process.env.MY_SERVER)

const port = myserver.PORT || 3000

app.listen(port, () => {
  console.log(`server running in http://${myserver.HOSTNAME}:${port}`)
})
