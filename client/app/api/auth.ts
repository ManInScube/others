import { ISignUpFx } from "@/types/auth";
import api from '../axiosClient'
import { toast } from "react-toastify";
import { createEffect } from "effector/effector.mjs";

export const signUpFx = createEffect(async ({url, name, lastname, email, password}:ISignUpFx)=>{
    const { data } = await api.post(url, {name, lastname, email, password})

    if(data.warningMessage){
        toast.warning(data.warningMessage)
        return
    }

    return data
})