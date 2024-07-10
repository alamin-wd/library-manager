import sliderImg1 from "../../assets/sliderImg/sliderImg1.png";
import sliderImg2 from "../../assets/sliderImg/sliderImg2.png";
import sliderImg3 from "../../assets/sliderImg/sliderImg3.png";
import sliderImg4 from "../../assets/sliderImg/sliderImg4.png";
import sliderImg5 from "../../assets/sliderImg/sliderImg5.png";
import sliderImg6 from "../../assets/sliderImg/sliderImg6.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from "./Slider";


const Banner = () => {

    return (

        <div>
            <Swiper className="mySwiper w-full h-[500px]"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                loop={true}
            >
                {/* Slider 1*/}
                <SwiperSlide>
                    <Slider
                        image={sliderImg1}
                        title={"Welcome to Our Library"}
                        description={"Dive into our diverse collection and discover books that inspire, educate, and enrich the minds of our school community."}
                    ></Slider>
                </SwiperSlide>

                {/* Slider 2*/}
                <SwiperSlide>
                    <Slider
                        image={sliderImg2}
                        title={"Explore Our Extensive  Book Collection"}
                        description={"Discover a wide range of books across various genres and categories. Find your next great read and easily add it to your personal collection with just a few clicks."}
                    ></Slider>
                </SwiperSlide>

                {/* Slider 3*/}
                <SwiperSlide>

                    <Slider
                        image={sliderImg3}
                        title={"Easily Manage Your Book Inventory"}
                        description={"Update book information effortlessly. Keep your collection organized by editing details like title, author, category, and more whenever needed, ensuring your library is always up to date."}
                    ></Slider>
                </SwiperSlide>

                {/* Slider 4*/}
                <SwiperSlide>
                    <Slider
                        image={sliderImg4}
                        title={"Borrow and Return Books Seamlessly"}
                        description={"Track borrowed books and manage returns with a user-friendly interface. Ensure timely returns and enjoy hassle-free borrowing experiences with our intuitive system designed for your convenience."}
                    ></Slider>
                </SwiperSlide>

                {/* Slider 5*/}
                <SwiperSlide>
                    <Slider
                        image={sliderImg5}
                        title={"Stay Updated with Borrowed Books"}
                        description={"Keep an eye on all borrowed books with our tracking feature. Know which books are out, who borrowed them, and when they're due for return to stay organized."}
                    ></Slider>
                </SwiperSlide>

                {/* Slider 6*/}
                <SwiperSlide>
                    <Slider
                        image={sliderImg6}
                        title={"Discover New Reads and Recommendations"}
                        description={"Get personalized book recommendations based on your interests. Explore new arrivals and popular reads curated just for you, making your reading journey exciting and enjoyable."}
                    ></Slider>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;