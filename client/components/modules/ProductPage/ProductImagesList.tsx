import styles from '@/styles/product-images-list/index.module.scss'
import { useState } from 'react';
import ProdictImagesItem from './ProductImagesItem';

const ProdictImagesList = ({images}:{images: string[]}) =>{
    const [currentImage, setCurrentImage] = useState<string>(images[0]);
    return(
        <div className={styles.productImagesList}>
            <ul>
                {images.map((item, i)=>(
                    <ProdictImagesItem key={i} src={item} callback={setCurrentImage} alt={`image-${i}`}/>
                ))}
            </ul>

            <div className={styles.productImagesList__image}>
                <img src={currentImage || images[0]} alt='' />
            </div>
        </div>
    )
}

export default ProdictImagesList