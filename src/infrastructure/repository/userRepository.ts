import IUser from "../../domain/user";
import { userModel } from "../database/userModel";
import IUserRepository from "../../usecase/interface/userInterface";

class UserRepository implements IUserRepository {
  
  async save(user: IUser) {
    const newUser = new userModel(user);
    await newUser.save();
    return newUser;
  }

  async findByEmail(email: String) {
    console.log(`Email exist check`);
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return existingUser;
    } else {
      return null;
    }
  }
}
export default UserRepository;
