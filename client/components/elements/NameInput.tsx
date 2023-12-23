import inputStyles from '@/styles/input/index.module.scss'
import { IAuthPageInput } from '@/types/auth';

interface IInputProps{
    // placeholder: string;
    // id: string;
    classNames?: string[];
}

export const NameInput=({register, errors}: IAuthPageInput, {classNames}: IInputProps)=>{
    return(
        <div 
        className={`${inputStyles.input} ${classNames}`}
        >
            <input
            id='name'
            type="text"
            placeholder=''
            {...register('name',{
                required: 'Введите имя!',
                minLength: 2,
                maxLength: 15,
                pattern: {
                    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
                    message: 'Недопустимое значение!',
                }
            })}
            />
            <label htmlFor='name'>Имя</label>
            {errors.name &&  (
                <span className='input_error'>{errors.name?.message}</span>
            )}
            {errors.name && errors.name.type==='minLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
            {errors.name && errors.name.type==='maxLength' && (
                <span className='input_error'>Минимум два символа</span>
            )}
        </div>
    )
}