import { IShoppingCartItem } from "@/types/shopping-cart";
import { createDomain } from "effector";


const shoppingCart = createDomain();

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>();
export const updateShoppingCart = shoppingCart.createEvent<IShoppingCartItem>();
export const removeShoppingCartItem = shoppingCart.createEvent<number>();
export const updateCartItemTotalPrice = shoppingCart.createEvent<{productId: number, total_price: number}>();
export const updateCartItemCount = shoppingCart.createEvent<{productId: number, count: number}>();
export const setTotalPrice = shoppingCart.createEvent<number>();


const remove = (items: IShoppingCartItem[], productId: number) =>
    items.filter((item)=>item.productId!==productId)



//TODO: optimize
function updateCartItem<T>(items: IShoppingCartItem[], productId: number, payload: T){
    return items.map((item)=>{
        if(item.productId===productId){
            return {
                ...item,
                ...payload
            }
        }

        return item
    })
}
    

export const $shoppingCart = shoppingCart
    .createStore<IShoppingCartItem[]>([])
    .on(setShoppingCart, (_, shoppingCart)=>shoppingCart)
    .on(updateShoppingCart, (state, item)=>[...state, item])
    .on(removeShoppingCartItem, (state, id)=>[...remove(state, id)])
    .on(updateCartItemTotalPrice, (state, {productId, total_price})=>[...updateCartItem(state, productId, {total_price})])
    .on(updateCartItemCount, (state, {productId, count})=>[...updateCartItem(state, productId, {count})])

export const $totalPrice = shoppingCart
    .createStore<number>(0)
    .on(setTotalPrice, (_, value)=>value)
