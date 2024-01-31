import IUser from '../domain/user'
import IUserRepository from './interface/userInterface'

class UserUsecase{
    private userRepository: IUserRepository
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async signIn(user: IUser) {
        console.log(`Inside useCase`);
        const userFound = await this.userRepository.findByEmail(user.email)

        if (userFound) {
            return {
                status: 200,
                data : 'User Already Exist'
            }
        } else {
            await this.userRepository.save(user)
            return {
                status: 200,
                data:'user saved'
            }
        }
    }
}

export default UserUsecase