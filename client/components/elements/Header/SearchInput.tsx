import { inputStyles } from '@/styles/search-input';
import { SelectOptionType } from '@/types/common';
import { useState } from 'react'
import Select from 'react-select'

export const SearchInput = () => {
    const [searchOption, setSearchOption] = useState<SelectOptionType>(null);

    const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
        setSearchOption(selectedOption)
    }

    return( 
    <Select placeholder="ПОИСК"
        value={searchOption} 
        onChange={handleSearchOptionChange}
        styles={inputStyles}
        options={['юбка', 'юбка', 'юбка'].map((item)=>({value: item, label: item}))}
    />
    )

}