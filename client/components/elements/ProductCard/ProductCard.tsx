import { formatPrice } from "@/utils/common";
import { FavouriteIcon } from "./FavouriteIcon"
import styles from '@/styles/product-card/index.module.scss'
import Link from "next/link";

interface IProductCardProps{
    id: number;
    name: string;
    manufacturer: string;
    price: number;
    image: string;
   // className: string;
}

export const ProductCard = ({id, name, manufacturer, price, image}: IProductCardProps) =>{
    return(
        <div className={styles.card}>
            <Link href={`/catalog/${id}`} passHref legacyBehavior>
            <div className={styles.card__content}>
                <div className={styles.card__img}>
                    <img src={image} alt="" />
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
            </Link>

        </div>
    )
}