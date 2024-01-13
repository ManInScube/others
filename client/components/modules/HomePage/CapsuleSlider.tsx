import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "@/components/elements/ProductCard/ProductCard";
import styles from '@/styles/capsule-slider/index.module.scss'
import { ArrowSvg } from "@/components/elements/ArrowSvg";


function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className={styles.prevArrow}>
            <ArrowSvg color="#1E1E1E"/>
        </div>
    );
}

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <ArrowSvg color="#1E1E1E"/>
        </div>
    );
}

export const CapsuleSlider = () =>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
      };
    
    return(
        <Slider {...settings} className={styles.capsuleSlider}>


            <div className={styles.capsuleSlider__slide}>
                <ProductCard name='{item.name}' manufacturer="{item.manufacturer}" price={9999} image="{item.images}" />
            </div>
            <div className={styles.capsuleSlider__slide}>
                <ProductCard name='{item.name}' manufacturer="{item.manufacturer}" price={9999} image="{item.images}" />
            </div>
            <div className={styles.capsuleSlider__slide}>
                <ProductCard name='{item.name}' manufacturer="{item.manufacturer}" price={9999} image="{item.images}" />
            </div>


    
        </Slider>
    )
    }