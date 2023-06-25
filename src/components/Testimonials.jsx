import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";

SwiperCore.use([Pagination, Autoplay]);

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

function Testimonials() {
  return (
    // 
    <>
    <div className="max-w-7xl mx-auto -mt-28 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold  text-[#A47E1B]">OUR SERVICES</h1>
      <hr className="border-[#A47E1B] border-2 w-10 items-center" />

      <Swiper
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
    </>
  );
}

export default Testimonials;
