export interface IDeliveryItem{
    city: string
    sreet: string
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