import express from 'express'
import { config } from 'dotenv'

config()
const app = express()

app.use(express.json())

app.use((req, res) => {
  res.status(400).json({ status: '400', message: 'Ruta no encontrada' })
})

const myserver = JSON.parse(process.env.MY_SERVER)

const port = myserver.PORT || 3000

app.listen(port, () => {
  console.log(`server running in http://${myserver.HOSTNAME}:${port}`)
})
