import { setProductsCheapFirst, setProductsExpensiveFirst } from '@/context/products'
import styles from '@/styles/sorting/index.module.scss'
import { IOption, SelectOptionType } from '@/types/common'
import { useState } from 'react'

export const Sorting = () =>{

    //const [sortingOption, setSortingOption] = useState<SelectOptionType>()

    // const handleSorting = (selectedOption: SelectOptionType) =>{
    //     setSortingOption(selectedOption)

    //     switch ((selectedOption as IOption).value) {
    //         case 'по возрастанию':
    //             setProductsCheapFirst()
    //             break;
    //         case 'по убыванию':
    //             setProductsExpensiveFirst()
    //             break;
    //         default:
    //             break;
    //     }
    // } 

    const [sortingOption, setSortingOption] = useState<string>('')

    const handleSorting = (e: any) =>{
        setSortingOption(e.target.value);

            switch (sortingOption) {
            case 'по возрастанию':
                setProductsCheapFirst()
                break;
            case 'по убыванию':
                setProductsExpensiveFirst()
                break;
            default:
                break;
        }
    } 
    
    return(
        <div className={styles.sorting}>
            <ul>
                <li>
                    <label htmlFor="sort-hits">
                        <input type="radio" name="sort" id="sort-hits" />
                        Хиты
                    </label>
                </li>
                <li>
                    <label htmlFor="sort-new">
                        <input type="radio" name="sort" id="sort-new" />
                        Рекомендации
                    </label>
                </li>
                <li>
                    <label htmlFor="sort-cheap">
                        <input type="radio" name="sort" id="sort-cheap" value='по возрастанию' checked={sortingOption==='по возрастанию'} onChange={handleSorting}
                        />
                        По возрастанию
                    </label>
                </li>
                <li>
                    <label htmlFor="sort-expensive">
                        <input type="radio" name="sort" id="sort-expensive" 
                        value='по убыванию'
                        checked={sortingOption==='по убыванию'}
                        onChange={handleSorting}
                        />
                        По убыванию
                    </label>
                </li>
            </ul>
        </div>
    )
}