import { Request, Response } from 'express';
import UserUsecase from '../usecase/userUsecase';

class UserController{
    private usercase: UserUsecase
    constructor(usercase: UserUsecase) {
        this.usercase = usercase
    }

    async signIn(req: Request, res: Response) {
        try {
            console.log(`userController`);
            const user = await this.usercase.signIn(req.body)
            res.status(user.status).json(user.data)
        } catch (error) {
            console.log(`error`);
        }
    }
}
export default UserController