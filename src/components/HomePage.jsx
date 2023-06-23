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
import Team from './Team';



function HomePage() {



    return (
        <>
            <div className="navbar-container">
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
            <Team />

        </>
    )
}

export default HomePage
