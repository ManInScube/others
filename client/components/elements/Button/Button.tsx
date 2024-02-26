import styles from '@/styles/button/index.module.scss'

interface IButtonProps{
    btnWidth: number | string,
    text: string
    onClick?: VoidFunction
    disabled?: boolean
}

export const Button = ({btnWidth, text, onClick, disabled}: IButtonProps) =>{
    return(
        <button className={styles.button} style={{width: btnWidth}} onClick={onClick} disabled={disabled}>
            {text.toUpperCase()}
        </button>
    )
}