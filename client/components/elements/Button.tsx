import styles from '@/styles/button/index.module.scss'

interface IButtonProps{
    btnWidth: number,
    text: string
    onClick?: VoidFunction
}

export const Button = ({btnWidth, text, onClick}: IButtonProps) =>{
    return(
        <button className={styles.button} style={{width: btnWidth}} onClick={onClick}>
            {text.toUpperCase()}
        </button>
    )
}