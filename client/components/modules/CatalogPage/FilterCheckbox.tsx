import { IFilterCheckboxProps } from "@/types/catalog";
import { useState } from "react";
import styles from '@/styles/filter-checkbox/index.module.scss'


export const FilterCheckbox = ({name, checkBoxList}: IFilterCheckboxProps) =>{
    const [checkedState, setCheckedState] = useState(
        new Array(checkBoxList.length).fill(false)
    );

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }

    return(
        <div className={styles.filterCheckbox}>
            <h4>{name}</h4>
            <ul>
                {checkBoxList.map((itemName, index)=>(
                    <li key={index}>
                        {/* <a>{name}</a> */}
                        <input 
                            type="checkbox" 
                           // name="" 
                            checked={checkedState[index]}
                            id={`${name}-${index}`} 
                            onChange={()=>handleOnChange(index)}
                            />
                        <label htmlFor={`${name}-${index}`}>{itemName}</label>
                    </li>
                ))}
            </ul>

        </div>
    )
}

