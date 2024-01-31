import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document{
    name: String,
    email: String,
    password:String
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    name:{
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    }
})

const userModel = mongoose.model<IUser>('user', userSchema)
export { userModel }