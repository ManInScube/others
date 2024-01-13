import Slider from "react-slick";
import testImg from '@/public/images/promo.png'
import styles from '@/styles/header/header-slider/index.module.scss'
import { ReactNode } from "react";
//import "slick-carousel/slick/slick.css";



export const HeaderSlider= () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        // appendDots:  (dots:ReactNode)=>(
        //     <div
        //         style={
        //             {}
        //         }
        //     >
        //         <ul>{dots}</ul>
        //     </div>
        // ),
        // customPaging: (index : number) => {
        //     return (
        //       <button style={index === this.state.currentSlide ? testSettings : null}>
        //         {index + 1}
        //       </button>
        //     )
        // }
      };
    
    return(
        <Slider {...settings} className={styles.headerSlider}>
            <div>
                <img src={testImg.src} alt="" />
            </div>
            <div>
                <img src={testImg.src} alt="" />
            </div>
            <div>
                <img src={testImg.src} alt="" />
            </div>

        </Slider>
    )
}