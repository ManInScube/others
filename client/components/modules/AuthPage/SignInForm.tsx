import { Button } from "@/components/elements/Button/Button"
import { EmailInput } from "@/components/elements/EmailInput/EmailInput"
import { Input } from "@/components/elements/Input/Input"
import { PasswordInput } from "@/components/modules/AuthPage/PasswordInput"
import { IInputs } from "@/types/auth"
import { signInFx } from "@/app/api/auth"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import styles from '@/styles/auth/index.module.scss'
import { showAuthError } from "@/utils/errors"
import { useRouter } from "next/router"

export const SignInForm = ()=> {
    const router = useRouter()

    const {
        register,
        formState:{errors},
        handleSubmit,
        resetField
    } = useForm<IInputs>(); 

    const onSubmit = async (data: IInputs) => {
        try {
         await signInFx({
            url: '/users/login',
            username: data.email,
            password: data.password,
          })
          resetField('email');
          resetField('password');
          router.push('/profile')
      } catch (error) {
          showAuthError(error);
      }
  }

    return(
        <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
            {/* <Input placeholder="Email" id="email" classNames={[styles.auth__input]}/>
            <Input placeholder="Пароль" id="password" classNames={[styles.auth__input]}/> */}

            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <div className={styles.auth__button}>
                <Button btnWidth={320} text='подтвердить'/>
            </div>
        </form>
    )
}