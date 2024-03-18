import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator"

export class AddAddressDto {
    @ApiProperty({example: '4'})
    @IsNotEmpty()
    readonly userId: string;

    @ApiProperty({example: 'Kazan'})
    @IsNotEmpty()
    readonly city: string;
    
    @ApiProperty({example: 'Hadi Taktash Uram'})
    @IsNotEmpty()
    readonly street: string;

    @ApiProperty({example: '14'})
    @IsNotEmpty()
    readonly house: string;
    
    @ApiProperty({example: '111'})
    @IsNotEmpty()
    readonly apartment: string;

}