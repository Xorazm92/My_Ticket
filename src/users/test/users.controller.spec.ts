import { UsersController } from "../users.controller"
import { Test } from "@nestjs/testing"
import { UsersService } from "../users.service"
import { JwtService } from "@nestjs/jwt"
import { Users } from "../models/user.model"
import { CreateUserDto } from "../dto/create-user.dto"
import { userStup } from "./stups/user.stup"
import { describe } from "node:test"

jest.mock("../users.service")

describe("Users controller",()=>{
    let usersController:UsersController
    let usersService: UsersService

    beforeAll(async ()=> {
        const modulRef = await Test.createTestingModule({
            controllers:[UsersController],
            providers:[UsersService,JwtService]
        }).compile()

        usersController = modulRef.get<UsersController>(UsersController)
        usersService = modulRef.get<UsersService>(UsersService)
    })

    it("Users controller should be defined",()=>{
        expect(usersController).toBeDefined()
    })
    it("Users service should be defined",()=>{
        expect(usersService).toBeDefined()
    })

    describe("create user",() => {
        describe("when create user is called",()=>{
            let user:Users;
            let createUserDto:CreateUserDto;
            beforeAll(async ()=>{
                createUserDto ={
                    name:userStup().name,
                    email:userStup().email,
                    password:userStup().password,
                    role_value:userStup().role_value
                }
                 user = await usersController.create(createUserDto)   
            });
            it("than it should call usersService",() => {
                expect(usersService.create).toHaveBeenCalledWith(createUserDto)
            });
        });
    });

    describe("find all",()=>{
        describe("When findAll users is called",()=>{
            let users: Users[]
            beforeAll(async ()=> {
                users = await usersController.findAll()
            })
            it("then it should call userService",() => {
                expect(usersService.findAll).toHaveBeenCalled();
            })

            it("then it should call return Users",() => {
                expect(users).toEqual([userStup()]);
            })
        })
    })
    describe("find one",()=>{
        describe("When findOne user is called",()=>{
            let user: Users
            beforeAll(async ()=> {
                user = await usersController.findOne(String(userStup().id))
            })
            it("then it should call userService",() => {
                expect(usersService.findOne).toHaveBeenCalled();
            })

            it("then it should call return User",() => {
                expect(user).toEqual(userStup());
                console.log(user);
            })
        })
    })
    describe("remove",()=>{
        describe("When remove user is called",()=>{
            let user: Users
            beforeAll(async ()=> {
                await usersController.remove(String(userStup().id))
            })
            it("then it should call userService",() => {
                expect(usersService.remove).toHaveBeenCalled();
            })
        })
    })
});