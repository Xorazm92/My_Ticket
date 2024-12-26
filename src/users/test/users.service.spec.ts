import { TestingModule, Test } from "@nestjs/testing";
import { userStup } from "./stups/user.stup";
import { UsersService } from "../users.service"
import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../roles/roles.service";
import { getModelToken } from "@nestjs/sequelize";
import { Users } from "../models/user.model";
import { Roles } from "../../roles/models/role.model";
import { CreateUserDto } from "../dto/create-user.dto";

describe("Users servise",() => {
    let usersService: UsersService;
    const mockUsersModel = {
        create: jest.fn().mockImplementation(userStup),
        findOne: jest.fn().mockImplementation(userStup),
        findAll: jest.fn().mockImplementation(() => [userStup()]),
        findByPk: jest.fn().mockImplementation(userStup),
        destroy: jest.fn(),
    };
    const mockRolesModel = {
        findOne: jest.fn().mockImplementation((value: string) => "USER"),
    };
    beforeAll(async() => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                UsersService,
                JwtService,
                RolesService,
                {
                    provide: getModelToken(Users),
                    useValue: mockUsersModel
                },
                {
                    provide:getModelToken(Roles),
                    useValue: mockRolesModel,
                }
            ]
        }).compile();
        usersService = moduleRef.get<UsersService>(UsersService)
    });

    it("should be defined", () => {
        expect(usersService).toBeDefined()
    })
    describe("createUser",() => {
        describe("when create User is called",() => {
            let createUserDto: CreateUserDto;
            let newUser: Users;
            beforeEach(async () => {
                createUserDto = {
                    name: userStup().name,
                    email: userStup().email,
                    password: userStup().password,
                    role_value: userStup().role_value
                };
                newUser = await usersService.create(createUserDto);
                console.log(newUser);
            });
            it("should be create new user", async () => {
                expect(newUser).toMatchObject({
                    ...userStup(),
                    roles: ["USER"],
                });
            });
        });
    });

    describe("getOneUser",()=>{
        describe("when getOneUser is called",() => {
            test("then it should call usersService", async () => {
                expect(await usersService.findOne(userStup().id)).toEqual(userStup());
            });
        });
    });

    describe("getAllUsers",() => {
        describe("when getAllUsers is called",() => {
            test("then it should cal usersService", async () => {
                expect(await usersService.findAll()).toEqual([userStup()])
            });
        });
    });
});
