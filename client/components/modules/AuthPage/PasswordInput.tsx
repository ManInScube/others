import inputStyles from '@/styles/input/index.module.scss'
import { IAuthPageInput } from '@/types/auth';

interface IInputProps{
    // placeholder: string;
    // id: string;
    classNames?: string[];
}

export const PasswordInput=({register, errors}: IAuthPageInput, {classNames}: IInputProps)=>{
    
    
    const inputName = 'password';

    return(
        <div 
        className={`${inputStyles.input} ${classNames}`}
        >
            <input
            id={inputName}
            type="password"
            placeholder=''
            {...register(inputName, {
                required: 'Введите имя!',
                minLength: 6,
                maxLength: 15,
            })}
            />
            <label htmlFor={inputName}>Пароль</label>
            {errors.password &&  (
                <span className='input_error'>{errors.password?.message}</span>
            )}
            {errors.password && errors.password.type==='minLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
            {errors.password && errors.password.type==='maxLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
        </div>
    )
}