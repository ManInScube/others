import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import styles from '@/styles/auth/index.module.scss'
import { useForm } from "react-hook-form";


export const SignUpForm = () => {
    const {handleSubmit} = useForm(); 

    const onSubmit = () =>{
        
    }

    return(
        <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Имя" id="name" classNames={[styles.auth__input]}/>
            <Input placeholder="Фамилия" id="lastname" classNames={[styles.auth__input]}/>
            <Input placeholder="Телефон" id="phone" classNames={[styles.auth__input]}/>
            <Input placeholder="Электронная почта" id="email" classNames={[styles.auth__input]}/>
            <div className={styles.auth__button}>
                <Button btnWidth={320} text='Зарегистрироваться'/>
            </div>
        </form>
    )
}