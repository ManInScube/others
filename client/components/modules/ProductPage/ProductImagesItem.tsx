

interface IProdictImagesItemProps{
    src: string,
    callback: (arg0: string)=>void,
    alt: string
}
const ProdictImagesItem = ({src, callback, alt}: IProdictImagesItemProps) =>{

    const changeImage = () =>callback(src)

    return(
        <li onClick={changeImage}>
            <img src={src} alt={alt} />
        </li>




    )
}

export default ProdictImagesItem