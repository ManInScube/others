import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { HTTPStatus } from "@/constants";

export const showAuthError = (error: unknown)=> {
    const axiosError = error as AxiosError

    if(axiosError.response){
        if(axiosError.response.status === HTTPStatus.UNAUTHORIZED){
            toast.error('Неверный email или пароль')
        }
    }

    toast.error((error as Error).message)
}