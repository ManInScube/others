export interface IShoppingCartItem{
    userId: number;
    productId: number;
    name: string;
    manufacturer: string;
    price: number;
    color: string;
    size: string;
    image: string;
    in_stock: number;
    count: number;
    total_price: number;
}

export interface IAddToCartFx{
    url: string;
    username: string;
    productId: number;
}

export interface IUpdateCartItemFx{
    url: string;
    payload: {
        total_price?: number;
        count?: number;
    }
}

export interface ICartItem{
    name: string;
    price: number;
    image: string;
    manufacturer: string;
    color: string;
    size: string;
    amount: number;
}

export interface ICounter{
    totalCount: number
    productId: number
    initialCount: number
    increasePrice: VoidFunction
    decreasePrice: VoidFunction,
    className: string
}