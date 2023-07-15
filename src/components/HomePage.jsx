import { Carousel } from 'antd';
import Navbar from './Navbar';
import "./Navbar.css"
import image from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
// import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import Service from './Service';
import About from './About';
// import Testimonials from './Testimonials';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";

SwiperCore.use([Pagination, Autoplay]);


function HomePage() {
    const testimonials = [
        {
            name: "John S.",
            // image: require("../images/johns.webp"),
            text: "I was skeptical about buying eyeglasses online, but Optica made it so easy and the quality exceeded my expectations.",
            rating: 4,
        },
        {
            name: "Sarah K.",
            // image: require("../images/sarahk.jpeg"),
            text: "I recently purchased a pair of sunglasses from Optica and I couldn't be happier! They fit perfectly and the lenses are top-notch.",
            rating: 5,
        },
        {
            name: "Michael B.",
            // image: require("../images/michaelb.webp"),
            text: "I have never received so many compliments on my eyeglasses before. Optica really knows how to make stylish frames.",
            rating: 4,
        },
        {
            name: "Amanda R.",
            // image: require("../images/amandar.webp"),
            text: "Optica's prescription sunglasses have been a game-changer for me. I can finally enjoy outdoor activities without worrying about my vision.",
            rating: 4,
        },
        {
            name: "Jay K.",
            // image: require("../images/jayk.jpeg"),
            text: "The customer service at Optica is fantastic. They helped me pick out the perfect pair of sunglasses for my face shape and style.",
            rating: 5,
        },
        {
            name: "Carl W.",
            // image: require("../images/carlw.webp"),
            text: "I've been a loyal Optica customer for years and I always recommend them to friends and family. Their selection is unbeatable.",
            rating: 3,
        },
        {
            name: "Rachel B.",
            // image: require("../images/rachelb.jpeg"),
            text: "I love the modern and sleek design of my Optica eyeglasses. They are both functional and stylish.",
            rating: 4,
        },
    ];


    return (
        <>

            <div className="navbar-container ">
                <Navbar /> {/* Your navbar component */}
            </div>
            <div className="carousel-container">
                <Carousel autoplay>
                    <div>
                        <img src={image} alt="image" className="carousel-image" />
                    </div>
                    <div>
                        <img src={image2} alt="image" className="carousel-image" />
                    </div>
                    <div>
                        <img src={image4} alt="image" className="carousel-image" />
                    </div>
                    <div>
                        <img src={image5} alt="image" className="carousel-image" />
                    </div>
                </Carousel>
            </div>
            {/* Our Services */}
            <Service />
            {/* About Us */}

        
                <About />
           
            {/* Team*/}
          
            <div className="justify-center items-center  my-4 ">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="text-2xl font-bold text-center text-[#A47E1B]">TEAM</h1>
                    <hr className="border-[#A47E1B] ext-center border-2 w-10" />
                </div>

                <Swiper
                    className='w-2/3'
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative mb-10 mt-8 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-64">
                                    <div className="absolute top-0 left-0 right-0 bottom-0">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-40 h-40 object-cover object-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full m-auto mt-4"
                                            style={{ zIndex: 1 }}
                                        />
                                    </div>
                                    <div className="absolute z-10 bottom-0 left-0 right-0 px-1 py-2">
                                        <p className="text-m text-center font-medium mb-4 ">
                                            {testimonial.text}
                                        </p>
                                        <div className="flex items-center justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((star, i) => (
                                                <FaStar key={i} className="text-[#A47E1B]" />
                                            ))}
                                        </div>
                                        <p className="text-[#A47E1B] text-center mb-4">
                                            - {testimonial.name} -
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* </> */}
        </>
    )
}

export default HomePage
