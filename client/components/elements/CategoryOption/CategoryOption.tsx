import { useEffect, useState } from "react";
import { ArrowSvg } from "../ArrowSvg/ArrowSvg"
import styles from '@/styles/category-option/index.module.scss'

interface ICategoryOptionProps{
    name?: string;
    title?: string;
}

export const CategoryOption = ({name, title}: ICategoryOptionProps) =>{
    const[svgColor, setSvgColor] = useState<string>('')
    useEffect(()=>{
        name && setSvgColor('#8A8A8A')
        title && setSvgColor('#1E1E1E')
    })
    return(
        //->Link??? href - props
        <a className={styles.category}>
            {name &&<p>{name}</p>}
            {title &&<h3>{title}</h3>}
            {
                <ArrowSvg color={svgColor}/>
            }
            
        </a>
    )
}