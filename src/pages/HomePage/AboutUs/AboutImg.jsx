
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import Slider from './Slider';

import sliderImg1 from "../../../assets/about-us/about-us-card1.png";
import sliderImg2 from "../../../assets/about-us/about-us-card2.png";
import sliderImg3 from "../../../assets/about-us/about-us-card3.png";
import sliderImg4 from "../../../assets/about-us/about-us-card4.png";


const AboutImg = () => {

    return (

        <Swiper className="mySwiper h-full"
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}

        >
            <SwiperSlide>
                <Slider image={sliderImg1}
                    title={"Smart Book Management"}
                ></Slider>
            </SwiperSlide>

            <SwiperSlide>
                <Slider image={sliderImg2}
                    title={"Personalized Collection"}
                ></Slider>
            </SwiperSlide>

            <SwiperSlide>
                <Slider image={sliderImg3}
                    title={"Community of Readers"}
                ></Slider>
            </SwiperSlide>

            <SwiperSlide>
                <Slider image={sliderImg4}
                    title={"Borrowing and Returning"}
                ></Slider>
            </SwiperSlide>

        </Swiper>
    );
};

export default AboutImg;