import { toast } from 'react-toastify';
import api from '../axiosClient'

import { createEffect } from "effector";
import { ICheckPaymentFx, IMakePaymentFx } from '@/types/order';

export const makePaymentFx = createEffect(
    async ({url, amount}:IMakePaymentFx)=>{ 
    const { data } = await api.post(url, {amount})

    return data
})

export const checkPaymentFx = createEffect(
    async ({url, paymentId}:ICheckPaymentFx)=>{ 
    const { data } = await api.post(url, {paymentId})

    return data
})