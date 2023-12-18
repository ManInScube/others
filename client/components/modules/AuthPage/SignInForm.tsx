import { Button } from "@/components/elements/Button"
import { Input } from "@/components/elements/Input"
import styles from '@/styles/auth/index.module.scss'

export const SignInForm = ()=> {
    return(
        <form className={styles.auth__form}>
            <Input placeholder="Email" id="email" classNames={[styles.auth__input]}/>
            <Input placeholder="Пароль" id="password" classNames={[styles.auth__input]}/>
            <div className={styles.auth__button}>
                <Button btnWidth={320} text='подтвердить'/>
            </div>
        </form>
    )
}