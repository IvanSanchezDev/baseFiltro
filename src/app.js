import express from 'express'
import { config } from 'dotenv'
import { routes as routesMedicamentos } from './routes/medicamentos.routes.js'
import { routes as routesVentas } from './routes/ventas.routes.js'
import { routes as routesRecetas } from './routes/recetas.routes.js'
import { routes as routesProveedor } from './routes/proveedor.routes.js'

config()
const app = express()

app.use(express.json())

app.use('/medicamentos', routesMedicamentos)
app.use('/ventas', routesVentas)
app.use('/recetas', routesRecetas)
app.use('/proveedor', routesProveedor)

app.use((req, res) => {
  res.status(400).json({ status: '400', message: 'Ruta no encontrada' })
})

const myserver = JSON.parse(process.env.MY_SERVER)

const port = myserver.PORT || 3000

app.listen(port, () => {
  console.log(`server running in http://${myserver.HOSTNAME}:${port}`)
})
