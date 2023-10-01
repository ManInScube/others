import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ){}

    findUser(filter:{
        where: {id?: string; username?: string; email?: string};
    }) : Promise<User>{
        return this.userModel.findOne({...filter});
    }

    async create(createUserDto: CreateUserDto,): Promise<User | {warningMessage: string}>{
        const user = new User();

        const existingByEmail = await this.findUser({
            where: {email: createUserDto.email}
        })

        if(existingByEmail) {
            return {warningMessage: 'Пользователь с таким email уже есть'};
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        user.username = createUserDto.username;
        user.password = hashedPassword;
        user.email = createUserDto.email;

        return user.save();
    }
}
