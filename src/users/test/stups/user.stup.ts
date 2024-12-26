import { Users } from "src/users/models/user.model"

export const userStup = ():Partial<Users>=>{
    return {
        id:1,
        name:"user1",
        email:"user@gmail.com",
        password:"userparol",
        role_value:"ADMIN",
        is_active:true
    }
}