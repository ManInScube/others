import { IFilterCheckboxProps } from "@/types/catalog";
import { useState } from "react";
import styles from '@/styles/filter-checkbox/index.module.scss'
import { FilterCheckboxItem } from "./FilterCheckboxItem";


export const FilterCheckbox = ({name, checkBoxList, setList, updateList}: IFilterCheckboxProps) =>{
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
                {checkBoxList.map((item)=>(
                    <FilterCheckboxItem title={item.title} id={item.id} checked={item.checked} event={updateList} key={item.id}/>
                ))}
            </ul>

        </div>
    )
}

