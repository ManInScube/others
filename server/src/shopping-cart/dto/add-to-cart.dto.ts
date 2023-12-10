import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from "class-validator"

export class AddToCartDto {
    @ApiProperty({example: 'Rustem'})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({example: 1})
    @IsOptional()
    readonly userId?: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly productId: number;

}