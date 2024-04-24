//Router es un módulo de express
import { Router } from "express";

//Rutas creadas para cada entidad
import UserRouter from "./users.router.js";
import HomeRouter from "./home.router.js";

//Instancia de Router
const router = Router();

//Instancias de las rutas
const userRouter = new UserRouter(Router)
const homeRouter = new HomeRouter(Router)

//Aqui se utilizan las rutas
router.use('/', homeRouter.getRouter())
router.use('/api/users', userRouter.getRouter())

//Aqui se maneja el error 404, que es cuando no encuentra la ruta
router.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

export default router;