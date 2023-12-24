import { ISignInFx, ISignUpFx } from "@/types/auth";
import api from '../axiosClient'
import { toast } from "react-toastify";
import { createEffect } from "effector/effector.mjs";

export const signUpFx = createEffect(async ({url, name, lastname, phone, email, password}:ISignUpFx)=>{
    const { data } = await api.post(url, {name, lastname, phone, email, password})

    if(data.warningMessage){
        toast.warning(data.warningMessage)
        return
    }

    toast.success('Регистрация прошла успешно')
    return data
})

export const signInFx = createEffect(async ({url, username, password}: ISignInFx)=>{
    const { data } = await api.post(url, {username, password})

    toast.success('Выволнен успешный вход')

    return data
})