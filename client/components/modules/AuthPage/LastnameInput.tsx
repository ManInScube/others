import { IAuthPageInput } from '@/types/auth';
import inputStyles from '@/styles/input/index.module.scss'
import styles from '@/styles/auth/index.module.scss'

interface IInputProps{
    // placeholder: string;
    // id: string;
    classNames?: string[];
}

export const LastnameInput=({register, errors}: IAuthPageInput, {classNames}: IInputProps)=>{

    const input = 'lastname';

    return(
        <div 
        className={`${inputStyles.input} ${styles.auth__input} ${classNames}`}
        >
            <input
            id={input}
            type="text"
            placeholder=''
            {...register(input, {
                required: 'Введите фамилию',
                minLength: 2,
                maxLength: 15,
                pattern: {
                    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
                    message: 'Недопустимое значение!',
                }
            })}
            />
            <label htmlFor={input}>Фамилия</label>
            {errors.lastname &&  (
                <span className='input_error'>{errors.lastname?.message}</span>
            )}
            {errors.lastname && errors.lastname.type==='minLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
            {errors.lastname && errors.lastname.type==='maxLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
        </div>
    )
}