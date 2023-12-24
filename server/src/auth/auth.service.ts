import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService){}

    async validateUser(email: string, password: string ){
        const user = await this.usersService.findOne({where: {email}});
        if(!user) throw new UnauthorizedException('Invalid credentials');

        const passwordValid = await bcrypt.compare(password, user.password);
        
        if(!passwordValid) throw new UnauthorizedException('Invalid credentials');

        if(user && passwordValid){
            return{
                userId: user.id,
                name: user.name,
                email: user.email
            }
        }

        return null;
    }
}
