interface ArrowSvgProps{
    color: string;
}

export const ArrowSvg = ({color} : ArrowSvgProps) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
            <path d="M21 42.3516L35 28.3516L21 14.3516" stroke={color} stroke-width="4" stroke-linecap="square"/>
        </svg>
    )
}