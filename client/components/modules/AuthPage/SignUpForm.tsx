import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { NameInput } from "@/components/elements/NameInput";
import { LastnameInput } from "@/components/elements/LastnameInput";
import { useForm } from "react-hook-form";
import { IInputs } from "@/types/auth";
import { EmailInput } from "@/components/elements/EmailInput";
import { PasswordInput } from "@/components/elements/PasswordInput";
import { toast } from "react-toastify";
import { signUpFx } from "@/app/api/auth";

import styles from '@/styles/auth/index.module.scss'



export const SignUpForm = () => {
    const {
        register,
        formState:{errors},
        handleSubmit,
        resetField
    } = useForm<IInputs>(); 

    const onSubmit = async (data: IInputs) => {
        try {
          const userData = await signUpFx({
            url: '/users/signup',
            name: data.name,
            lastname: data.name,
            password: data.password,
            email: data.email,
          })

            //if(!userData) return

            console.log(userData);
            resetField('name');
            resetField('lastname');
            resetField('password');
            resetField('email');
        } catch (error) {
            toast.error((error as Error).message);
        }
    }

    return(
        <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
            {/* <Input placeholder="Имя" id="name" classNames={[styles.auth__input]}/>
            <Input placeholder="Фамилия" id="lastname" classNames={[styles.auth__input]}/>
            <Input placeholder="Телефон" id="phone" classNames={[styles.auth__input]}/>
            <Input placeholder="Электронная почта" id="email" classNames={[styles.auth__input]}/> */}

            {/* сделать отдельный Input и сразу прокинуть пропсы */}
            <NameInput register={register} errors={errors} /> 
            <LastnameInput register={register} errors={errors} /> 
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <div className={styles.auth__button}>
                <Button btnWidth={320} text='Зарегистрироваться'/>
            </div>
        </form>
    )
}