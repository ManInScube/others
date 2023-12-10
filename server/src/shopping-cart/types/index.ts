import { ApiProperty } from "@nestjs/swagger"

class ShoppingCartItem{
    @ApiProperty({example: 1})
    id: number

    @ApiProperty({example: 1})
    userId: number

    @ApiProperty({example: 1})
    productId: number

    @ApiProperty({example: "Shawl"})
    name: string

    @ApiProperty({example: "Measure"})
    manufacturer: string

    @ApiProperty({example: 9999})
    price: number

    @ApiProperty({example: ""})
    image: string

    @ApiProperty({example: 9})
    in_stock: number

    @ApiProperty({example: 9})
    count: number

    @ApiProperty({example: 9999})
    total_price: number

    @ApiProperty({example: "2023-12-06T18:49:17.000Z"})
    createdAt: string

    @ApiProperty({example: "2023-12-06T18:49:17.000Z"})
    updatedAt: string
}

export class GetAllResponse extends ShoppingCartItem{}

export class AddToCartResponse extends ShoppingCartItem{}

export class UpdateCountResponse{
    @ApiProperty({example: 9})
    count: number
}

export class UpdateCountRequest{
    @ApiProperty({example: 9})
    count: number
}

export class UpdateTotalPriceResponse{
    @ApiProperty({example: 9999})
    total_price: number
}

export class UpdateTotalPriceRequest{
    @ApiProperty({example: 9999})
    total_price: number
}


