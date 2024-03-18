export interface IDeliveryItem{
    city: string
    street: string
    house: string
    apartment: string
}

export interface IMakePaymentFx{
    url: string
    amount: number
}

export interface ICheckPaymentFx{
    url: string
    paymentId: string
}

export interface IAddAddressFx{
    url: string
    userId: string
    city: string
    street: string
    house: string
    apartment: string
}
