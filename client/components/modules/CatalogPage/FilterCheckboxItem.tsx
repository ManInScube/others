import { IFilterCheckboxItem } from "@/types/catalog"

export const FilterCheckboxItem = ({title, checked, id, event}:IFilterCheckboxItem) =>{

    const handleFilterChange = () =>event({checked: !checked, id} as IFilterCheckboxItem)

    return(
        <li>
            <input 
            type="checkbox" 
            checked={checked}
            onChange={handleFilterChange}
            id={id}
            />
            <label
              //  htmlFor={`${name}-${index}`}
              htmlFor={id}
            >{
                title}
            </label>
        </li>
    )
}