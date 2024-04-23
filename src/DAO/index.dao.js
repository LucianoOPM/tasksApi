import { PrismaClient } from '@prisma/client'
import UserDao from './user.dao.js'
const prisma = new PrismaClient()

const prismaUser = prisma.user
const prismaTask = prisma.task
const prismaList = prisma.list

const userDao = new UserDao(prismaUser)

export { userDao }