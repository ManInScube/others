import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from "class-validator"

export class AddToCartDto {
    @ApiProperty({example: 'Rustem'})
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({example: 1})
    @IsOptional()
    readonly userId?: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly productId: number;

}