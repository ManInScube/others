import {IsNotEmpty, IsPhoneNumber} from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly email: string;

    // @IsPhoneNumber()
    // readonly phone: string;
}