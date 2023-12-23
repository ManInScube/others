import { IAuthPageInput } from '@/types/auth';
import inputStyles from '@/styles/input/index.module.scss'
import styles from '@/styles/auth/index.module.scss'

interface IInputProps{
    // placeholder: string;
    // id: string;
    classNames?: string[];
}

export const EmailInput=({register, errors}: IAuthPageInput, {classNames}: IInputProps)=>{
    return(
        <div 
        className={`${inputStyles.input} ${styles.auth__input} ${classNames}`}
        >
            <input
            id='email'
            type="email"
            placeholder=''
            {...register('email',{
                required: 'Введите Email!',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Неправильный Email!',
                }
            })}
            />
            <label htmlFor='name'>Email</label>
            {errors.email && (
                <span className='input_error'>{errors.email?.message}</span>
            )}

        </div>
    )
}