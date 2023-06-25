
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png'
import instagram from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

function Footer() {
    return (
        <div>
        <div className="bg-[#000000] w-full">
          <div className="justify-center flex flex-col md:flex-row p-6">
            <div className="justify-around items-center p-6 w-full md:w-1/4">
              <h1 className="text-2xl font-bold text-[#A47E1B]">TechOps Lab</h1>
              <p className="text-white mt-4">Specializes in providing high-quality, stylish products for your wardrobe</p>
            </div>
            <div className="justify-around items-center p-6 w-full md:w-1/4">
              <h1 className="text-2xl font-bold text-white">Contact</h1>
              <hr className="border-[#A47E1B] border-l-2 w-20 items-center" />
              <div className="flex flex-row mt-2">
                <MailOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                <p className="text-white">Email: jpguantai@gmail.com</p>
              </div>
              <div className="flex flex-row mt-2">
                <PhoneOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                <p className="text-white">Phone: +254795070535</p>
              </div>
              <div className="flex flex-row mt-2">
                <EnvironmentOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                <p className="text-white">Location: Ongata Rongai</p>
              </div>
            </div>
            <div className="justify-around items-center p-6 w-full md:w-1/4">
              <h1 className="text-2xl font-bold text-white">Follow Us</h1>
              <hr className="border-[#A47E1B] border-l-2 w-20 items-center" />
              <div className="flex flex-row mt-2">
                <a href="https://www.facebook.com/your-facebook-link">
                  <img src={facebook} alt="facebook" className="w-8 h-8 mx-2" />
                </a>
                <a href="https://www.instagram.com/your-instagram-link">
                  <img src={instagram} alt="instagram" className="w-8 h-8 mx-2" />
                </a>
                <a href="https://www.twitter.com/your-twitter-link">
                  <img src={twitter} alt="twitter" className="w-8 h-8 mx-2" />
                </a>
                <a href="https://www.youtube.com/your-youtube-link">
                  <img src={youtube} alt="youtube" className="w-8 h-8 mx-2" />
                </a>
              </div>
            </div>
            <div className="justify-around items-center p-6 w-full md:w-1/4">
              <h1 className="text-2xl font-bold text-white">Quick Links</h1>
              <hr className="border-[#A47E1B] border-l-2 w-20 items-center" />
              <Link to="/">
                <p className="text-white hover:text-[#A47E1B]">Home</p>
              </Link>
              <Link to="/tech">
                <p className="text-white hover:text-[#A47E1B]">Tech Company</p>
              </Link>
              <Link to="/writing">
                <p className="text-white hover:text-[#A47E1B]">Writing Agency</p>
              </Link>
              <Link to="/art">
                <p className="text-white hover:text-[#A47E1B]">Art Gallery</p>
              </Link>
              <Link to="/about">
                <p className="text-white hover:text-[#A47E1B]">About</p>
              </Link>
              <Link to="/contact">
                <p className="text-white hover:text-[#A47E1B]">Contact</p>
              </Link>
            </div>
          </div>
          <div className="justify-center items-center flex flex-col">
            <hr className="border-[#a2a1a1] border-l-2 w-full" />
            <div className="flex flex-row text-center font-bold text-white my-2">
              <p className="text-center mx-auto">
                &copy;{new Date().getFullYear()}{" "}
                <span className="text-md text-[#A47E1B]">TechOps Lab</span>. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Footer

