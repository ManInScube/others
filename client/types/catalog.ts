import {Event} from 'effector'

export interface IFilterCheckboxProps{
    name: string
    checkBoxList: Array<IFilterCheckboxItem>
    setList: Event<IFilterCheckboxItem[]>
    updateList: Event<IFilterCheckboxItem>
}

export interface IFilterCheckboxItem{
    title: string;
    checked: boolean;
    id?: string;
    event: Event<IFilterCheckboxItem>
}

export interface IPriceRangeProps{
    priceRange: number[]
    setPriceRange: (arg0:number[])=>void,
}

export interface IFilterProps extends IPriceRangeProps{
    //resetHandler: VoidFunction
    setIsFilterInQuery: (arg0: boolean)=>void
}