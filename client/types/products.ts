export interface IProduct{
    id: number;
    name: string;
    manufacturer: string;
    size: string;
    type: string;
    price: number;
    description: string;
    color: string;
    images: string;
    in_stock: number;
    vendor_code: string;
    new: boolean
    bestseller: boolean
}

export interface IProducts{
    count: number;
    rows: IProduct[];
}