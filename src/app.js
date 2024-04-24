//express es el módulo encargado de faciliar la creación de una API
import express from 'express'
import { port } from './config/dotenv.config.js'
//router es el módulo encargado de manejar las rutas
import router from './routes/index.js'

const app = express()

app.use(express.json())
//Aqui se utiliza el router para manejar las rutas
app.use(router)

//Aqui se inicia el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})