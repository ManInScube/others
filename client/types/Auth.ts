import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IInputs{
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IAuthPageInput{
    register: UseFormRegister<IInputs>
    errors: FieldErrors<IInputs>
}

export interface ISignUpFx{
    url: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
}