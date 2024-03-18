import styles from '@/styles/input/index.module.scss'

interface IInputProps{
    placeholder: string;
    id: string;
    classNames?: string[];
    onChange: (arg0: string)=>void
}

export const Input=({placeholder, id, classNames, onChange}: IInputProps)=>{
    return(
        <div className={`${styles.input} ${classNames}`}>
            <input id={id} type="text" placeholder='' onChange={(e)=>onChange(e.target.value)} />
            <label htmlFor={id}>{placeholder}</label>
        </div>
    )
}