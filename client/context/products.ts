import { IProduct, IProducts } from "@/types/products";
import { combine, createDomain } from "effector";

const products = createDomain()

export const setProducts = products.createEvent<IProducts>()

export const setProductsCheapFirst = products.createEvent()
export const setProductsExpensiveFirst = products.createEvent()
export const setProductsByPopularity = products.createEvent()
export const setMore = products.createEvent<IProducts>()

const updateStore = (state: IProducts, data: IProducts) =>{
    data.rows.forEach((item)=>state.rows.push(item))
    return {...state}
}
export const $products = products
    .createStore<IProducts>({} as IProducts)
    .on(setProducts, (_, items)=>items)
    .on(setProductsCheapFirst, (state)=>({
        ...state,
        rows:state.rows.sort((a, b)=>a.price - b.price),
    })).on(setProductsExpensiveFirst, (state)=>({
        ...state,
        rows: state.rows.sort((a, b)=>b.price - a.price)
        
    }))
    // .on(setMore, (state, item)=>({
    //     ...state,
    //     rows:[...state.rows, item]
    // }))
    .on(setMore, updateStore)
    //.on(setMore, (list, item)=>{list.count+20,[...list.rows, item.rows]})
    //.on(setMore, (state, data)=>combine({...state})
    // .on(setProductsByPopularity, (state)=>({
    //     ...state,
    //     rows: state.rows.sort((a, b)=>b.price - a.price)
    // }))



