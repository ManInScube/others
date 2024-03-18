import { createEffect } from "effector/effector.mjs";
import api from '../axiosClient'
import { IAddAddressFx } from "@/types/order";


export const getAddressesFx = createEffect(async (url: string) => {
    const {data} = await api.get(url)

    return data
})

export const addAddressFx = createEffect(
    async ({ url, userId, city, street, house, apartment }: IAddAddressFx) => {
      const { data } = await api.post(url, { userId, city, street, house, apartment })
  
      return data
    }
  )