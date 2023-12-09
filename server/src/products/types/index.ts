import { ApiProperty } from "@nestjs/swagger";

export interface IProductsQuery{
    limit: string;
    offset: string;
}

class Product{
    @ApiProperty({example: 1})
    id: number

    @ApiProperty({example: "Shawl"})
    name: string

    @ApiProperty({example: "Measure"})
    manufacturer: string

    @ApiProperty({example: "XL"})
    size: string

    @ApiProperty({example: 9999})
    price: number

    @ApiProperty({example: "Perfect look for your look"})
    description: string

    @ApiProperty({example: "black"})
    color: string

    @ApiProperty({example: ""})
    images: string

    @ApiProperty({example: 9})
    in_stock: number

    @ApiProperty({example: "UoPzUfOBkV8k2QU"})
    vendor_code: string

    @ApiProperty({example: true})
    new: boolean

    @ApiProperty({example: false})
    bestseller: boolean

    @ApiProperty({example: "2023-12-06T18:49:17.000Z"})
    createdAt: string

    @ApiProperty({example: "2023-12-06T18:49:17.000Z"})
    updatedAt: string
}


export class PaginateAndFilterResponse{
    @ApiProperty({example: 10})
    count: number;

    @ApiProperty({type: Product, isArray: true})
    rows: Product;
}

export class Bestsellers extends Product{
    @ApiProperty({example: true})
    bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse{
    @ApiProperty({example: 10})
    count: number;

    @ApiProperty({type: Product, isArray: true})
    rows: Bestsellers;
}

export class NewProduct extends Product{
    @ApiProperty({example: true})
    new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse{
    @ApiProperty({example: 10})
    count: number;

    @ApiProperty({type: Product, isArray: true})
    rows: NewProduct;
}

export class SearchByLetterResponse extends Product{
    @ApiProperty({example: 'P'})
    name: string;
}

export class SearchResponse extends PaginateAndFilterResponse{
    @ApiProperty({type: SearchByLetterResponse, isArray: true})
    rows: SearchByLetterResponse;
}
export class SearchRequest{
    @ApiProperty({example: 'P'})
    search: string;
}

export class GetByNameResponse extends Product{
    @ApiProperty({example: 'Platok'})
    name: string;
}
export class GetByNameRequest{
    @ApiProperty({example: 'Platok'})
    name: string;
}

export class FindOneResponse extends PaginateAndFilterResponse{}
