import { IDeliveryItem } from "@/types/order";
import { createDomain } from "effector";


const delivery = createDomain();

export const setDeliveryAddress = delivery.createEvent<IDeliveryItem[]>()

export const $delivery = delivery
    .createStore<IDeliveryItem[]>([])
    //.on(setDeliveryAddress, (state, item)=>[...state, item])
    .on(setDeliveryAddress, (_, delivery)=>delivery)