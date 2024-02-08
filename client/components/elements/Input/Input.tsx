import styles from '@/styles/input/index.module.scss'

interface IInputProps{
    placeholder: string;
    id: string;
    classNames?: string[];
}

export const Input=({placeholder, id, classNames}: IInputProps)=>{
    return(
        <div className={`${styles.input} ${classNames}`}>
            <input id={id} type="text" placeholder=''/>
            <label htmlFor={id}>{placeholder}</label>
        </div>
    )
}