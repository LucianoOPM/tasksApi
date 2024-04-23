import { Router } from "express";
import UserRouter from "./users.router.js";

const router = Router();

const userRouter = new UserRouter(Router)

router.use('/api/users', userRouter.getRouter())

router.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

export default router;