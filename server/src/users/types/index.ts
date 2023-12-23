import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest{
    @ApiProperty({example: 'Rustem'})
    readonly username: string;

    @ApiProperty({example: 'Rustem123'})
    readonly password: string;
}

export class LoginUserResponse{
    @ApiProperty({example: {user:{
        userId: 1,
        username: "RustyRustem",
        password: "Rustem123"
    }}})
    user: {
        userId: number,
        username: string,
        password: string
    };

    @ApiProperty({example: 'Logged In'})
    msg: string;
}


export class LogoutUserResponse{
    @ApiProperty({example: "session has ended"})
    msg: string
}

export class LoginCheckResponse{
    @ApiProperty({example: 1})
    userId: number

    @ApiProperty({example: "Rustem"})
    email: string

    @ApiProperty({example: "Rustem123"})
    password: string
}

export class SignupResponse{
    @ApiProperty({example: 1})
    userId: number

    @ApiProperty({example: "Rustem"})
    name: string

    @ApiProperty({example: "Zaripov"})
    lastname: string

    @ApiProperty({example: "8-999-999-9999"})
    phone: string
    
    @ApiProperty({example: "rustem@tatmail.ru"})
    email: string
    
    @ApiProperty({example: "Hashed$Rustem$123"})
    password: string

    @ApiProperty({example: "2023"}) //TODO:-Proper format
    updatedAt: string

    @ApiProperty({example: "2023"})
    createdAt: string
}