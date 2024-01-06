import { IOption } from "@/types/common";
import { GroupBase, StylesConfig } from "react-select";

export const inputStyles: StylesConfig<
IOption,
boolean,
GroupBase<IOption>
> = {
    control: ()=>({
        fontSize: '24px',
        borderTop: '1px solid #1E1E1E',
        borderBottom: '1px solid #1E1E1E',
        textTransform: 'uppercase'
    }),
    // input:()=>({
    //     textTransform: 'cappitalize'
    // }),
    indicatorSeparator: ()=>({
        border: 'none'
    }),
    dropdownIndicator: ()=>({
        display: 'none'
    }),
    menu: ()=>({
        border: 'none'
    }),
    option: ()=>({
        color: '#8A8A8A',
        fonFamily: 'Open Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        cursor: 'pointer'
    }),
    menuList: ()=>({
 
    }),
    placeholder: (defaultStyles)=>({
        ...defaultStyles,
        color: '#1E1E1E',
        fontFamily: 'Open Sans',
        fontSize: '24px',

    }),  
      
}