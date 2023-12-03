import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsPhoneNumber} from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: 'Rustem'})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({example: 'Rustem123'})
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({example: 'rustem@tatmail.ru'})
    @IsNotEmpty()
    readonly email: string;

    // @IsPhoneNumber()
    // readonly phone: string;
}