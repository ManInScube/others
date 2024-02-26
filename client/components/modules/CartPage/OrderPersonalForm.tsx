import { Button } from '@/components/elements/Button/Button'
import { Input } from '@/components/elements/Input/Input'
import { NameInput } from '@/components/elements/NameInput'
import { useState } from 'react'
import { LastnameInput } from '../AuthPage/LastnameInput'
import { PhoneInput } from '@/components/elements/PhoneInput'
import { EmailInput } from '@/components/elements/EmailInput/EmailInput'
import { useForm } from "react-hook-form";
import styles from '@/styles/order/index.module.scss'

interface IOrderInputs{
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

const OrderPersonalForm = () =>{
    const {
        register,
        formState:{errors},
        handleSubmit,
        resetField
    } = useForm<IOrderInputs>(); 

    const [agreement, setAgreement] = useState<boolean>(false)

    const handleAgreementChange = () =>{
        setAgreement(!agreement);
    }

    const onSubmit = async (data: IOrderInputs) => {
        try {
          const userData = await signUpFx({
            url: '/users/signup',
            name: data.name,
            lastname: data.lastname,
            phone: data.phone,
            email: data.email,
          })

            if(!userData) return

            console.log(userData);
            resetField('name');
            resetField('lastname');
            resetField('phone');
            resetField('password');
            resetField('email');
        } catch (error) {
           showAuthError(error);
        }
    }

    return(
        <form className={styles.order} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.order__title}>введите данные для доставки</p>
            {/* <div className={styles.order__input}>
                <Input placeholder={'Имя*'} id={'name'} />
            </div>
            <div className={styles.order__input}>
                <Input placeholder={'Фамилия'} id={'lastname'}/>
            </div>
            <div className={styles.order__input}>
                <Input placeholder={'Телефон'} id={'phone'}/>
            </div>
            <div className={styles.order__input}>
                <Input placeholder={'E-mail'} id={'email'}/>
            </div> */}

            <NameInput register={register} errors={errors} /> 
            <LastnameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors}/> 
            <EmailInput register={register} errors={errors} />
            <label htmlFor="rules" className={styles.order__checkbox}>
                <input
                type="checkbox"
                name="" id="rules"
                onChange={handleAgreementChange}
                checked={agreement}
                />
                <span>Я согласен/а с <a href="">Правилами обработки информации</a> </span>
            </label>
            <Button btnWidth={'100%'} text={'продолжить'} disabled={!agreement}/>
        </form>
    )

}

export default OrderPersonalForm