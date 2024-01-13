import { formatPrice } from "@/utils/common";
import { FavouriteIcon } from "./FavouriteIcon"
import styles from '@/styles/product-card/index.module.scss'
import testImg from '@/public/images/CardImage.png'

interface IProductCardProps{
    name: string;
    manufacturer: string;
    price: number;
    image: string;
   // className: string;
}

export const ProductCard = ({name, manufacturer, price}: IProductCardProps) =>{
    return(
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={testImg.src} alt="" />
                <a>
                    <FavouriteIcon filled={false}/>
                </a> 
            </div>
            <div className={styles.card__info}>
                <div>
                    <p className={styles.card__productName}>{name}</p>
                    <p className={styles.card__brandName}>{manufacturer}</p>
                </div>

                <p className={styles.card__price}>{formatPrice(price)} ₽</p>
            </div>
        </div>
    )
}