import express from 'express'
import { port } from './config/dotenv.config.js'
import router from './routes/index.js'

const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})