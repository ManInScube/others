import api from '../axiosClient'
import { createEffect } from "effector/effector.mjs";

export const getBestsellersOrNewFx = createEffect(async(url: string) =>  {
    const {data} = await api.get(url);

    return data
})

export const getProductsFx = createEffect(async(url: string) =>  {
    const {data} = await api.get(url);

    return data
})

export const getMoreProductsFx = createEffect(async(url: string) =>  {
    const {data} = await api.get(url);

    return data
})

//test

export const getProductsByTypeFx = createEffect(
    async ({url, search}: {url: string, search: string})=>{
    const {data} = await api.post(url, { search });

    return data
})