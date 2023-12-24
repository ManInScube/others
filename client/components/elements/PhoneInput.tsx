import { IAuthPageInput } from '@/types/auth';
import inputStyles from '@/styles/input/index.module.scss'
import styles from '@/styles/auth/index.module.scss'

interface IInputProps{
    // placeholder: string;
    // id: string;
    classNames?: string[];
}

export const PhoneInput=({register, errors}: IAuthPageInput, {classNames}: IInputProps)=>{
    return(
        <div 
        className={`${inputStyles.input} ${styles.auth__input} ${classNames}`}
        >
            <input
            id='phone'
            type="tel"
            placeholder=''
            {...register('phone',{
                required: 'Введите телефон',
                pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: 'Неправильный телефон',
                }
            })}
            />
            <label htmlFor='phone'>Телефон</label>
            {errors.phone && (
                <span className='input_error'>{errors.phone?.message}</span>
            )}

        </div>
    )
}