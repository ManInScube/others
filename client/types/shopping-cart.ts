export interface IShoppingCartItem{
    userId: number;
    productId: number;
    name: string;
    manufacturer: string;
    price: number;
    image: string;
    in_stock: number;
    count: number;
    total_price: number;
}