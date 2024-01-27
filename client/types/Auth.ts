import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IInputs{
    name: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
}

export interface IAuthPageInput{
    register: UseFormRegister<IInputs>
    errors: FieldErrors<IInputs>
}
//TODO: IInputs
export interface ISignUpFx{
    url: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
}

export interface ISignInFx{
    url: string;
    username: string;
    password: string;
}

export interface IUser{
    userId: string | number;
    name: string;
    lastname: string;
    phone: string;
    email: string;
}