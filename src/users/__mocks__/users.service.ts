import { userStup } from "../test/stups/user.stup";

export const UsersService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(userStup()),
    findAll: jest.fn().mockResolvedValue([userStup()]),
    findOne: jest.fn().mockResolvedValue(userStup()),
    remove: jest.fn().mockResolvedValue({message:"Foydalanuvchi o'chirildi"})
})