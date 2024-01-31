import UserController from "../../adapter/userController";
import UserRepository from "../repository/userRepository";
import UserUsecase from "../../usecase/userUsecase";
import express from 'express'

const repository = new UserRepository()
const useCase = new UserUsecase(repository)
const controller = new UserController(useCase)

const router = express.Router()

router.post('/api/user/signin', (req, res) => controller.signIn(req, res))

export default router