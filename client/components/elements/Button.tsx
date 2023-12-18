import styles from '@/styles/button/index.module.scss'

interface IButtonProps{
    btnWidth: number,
    text: string
}

export const Button = ({btnWidth, text}: IButtonProps) =>{
    return(
        <button className={styles.button} style={{width: btnWidth}}>
            {text.toUpperCase()}
        </button>
    )
}