import IUser from '../../domain/user'

interface IUserRepository{
    save(user: IUser),
    findByEmail(email:String)
}

export default IUserRepository