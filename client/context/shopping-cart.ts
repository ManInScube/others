import { IShoppingCartItem } from "@/types/shopping-cart";
import { createDomain } from "effector";


const shoppingCart = createDomain();

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>();

export const $shoppingCart = shoppingCart
    .createStore<IShoppingCartItem[]>([])
    .on(setShoppingCart, (_, shoppingCart)=>shoppingCart)