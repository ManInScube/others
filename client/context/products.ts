import { IFilterCheckboxItem } from "@/types/catalog";
import { IProduct, IProducts } from "@/types/products";
import { clothTypes } from "@/utils/catalog";
import { combine, createDomain } from "effector";

const products = createDomain()

export const setProducts = products.createEvent<IProducts>()

export const setProductsCheapFirst = products.createEvent()
export const setProductsExpensiveFirst = products.createEvent()
export const setProductsByPopularity = products.createEvent()
export const setMore = products.createEvent<IProducts>()

export const setClothType = products.createEvent<IFilterCheckboxItem[]>()
export const updateClothType = products.createEvent<IFilterCheckboxItem>()

export const setOuterwearType = products.createEvent<IFilterCheckboxItem[]>()
export const updateOuterwearType = products.createEvent<IFilterCheckboxItem>()

export const setType = products.createEvent<IProducts>()

export const setFiltereProducts = products.createEvent<IProducts>()

export const setSimilarProducts = products.createEvent<IProducts>()

export const setViewedProducts = products.createEvent<IProducts>()

const updateStore = (state: IProducts, data: IProducts) =>{
    data.rows.forEach((item)=>state.rows.push(item))
    return {...state}
}

const updateTypes = (
    types: IFilterCheckboxItem[],
    id: string,
    payload: Partial<IFilterCheckboxItem>
) => types.map((item)=>{
    if(item.id===id){
        return {
            ...item,
            ...payload
        }
    }

    return item
})

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
    .on(setMore, updateStore)
    .on(setType, (_, items)=>items)
    // .on(setProductsByPopularity, (state)=>({
    //     ...state,
    //     rows: state.rows.sort((a, b)=>b.price - a.price)
    // }))


    export const $clothType = products
        .createStore<IFilterCheckboxItem[]>(
            clothTypes as IFilterCheckboxItem[]
        )
        .on(setClothType, (_, item)=>item)
        .on(updateClothType, (state, payload)=>[
            ...updateTypes(state, payload.id as string, {checked: payload.checked})
        ])

    export const $outerwearType = products
        .createStore<IFilterCheckboxItem[]>(
            clothTypes as IFilterCheckboxItem[]
        )
        .on(setOuterwearType, (_, item)=>item)
        .on(updateOuterwearType, (state, payload)=>[
            ...updateTypes(state, payload.id as string, {checked: payload.checked})
        ])

    export const $filteredProducts = products
        .createStore<IProducts>(
            {} as IProducts
        )
        .on(setFiltereProducts, (_, item)=>item)


    export const $similarProducts = products
        .createStore<IProducts>(
            {} as IProducts
        )
        .on(setSimilarProducts, (_, item)=>item)

    export const $viewedProducts = products
        .createStore<IProducts>(
            {} as IProducts
        )
        .on(setViewedProducts, (_, item)=>item)
        


        

    



