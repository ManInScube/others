import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsPhoneNumber} from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: 'Rustem'})
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({example: 'Zaripov'})
    @IsNotEmpty()
    readonly lastname: string;
    
    @ApiProperty({example: '8-999-999-9999'})
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone: string;

    @ApiProperty({example: 'rustem@tatmail.ru'})
    @IsNotEmpty()
    readonly email: string;
    
    @ApiProperty({example: 'Rustem123'})
    @IsNotEmpty()
    readonly password: string;

}