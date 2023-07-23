import { Carousel } from 'antd';
import { Card } from 'antd';
import Navbar from './Navbar';
import "./Navbar.css"

import itech from "../assets/Itech.jpg"
import itech2 from "../assets/Itech2.jpg"
import Itech3 from "../assets/Itech3.jpg"
import itech4 from "../assets/Itech4.png"
import Itech5 from "../assets/Itech5.jpg"
import Itech6 from "../assets/Itech6.jpg"
import Itech7 from "../assets/Itech7.jpg"
import Itech8 from "../assets/Itech8.jpg"
import Itech9 from "../assets/Itech9.jpg"
import Itech10 from "../assets/Itech10.jpg"
import Itech11 from "../assets/Itech11.jpg"
import Itech12 from "../assets/Itech12.jpg"
import Itech13 from "../assets/Itech13.jpg"
import { HiCode } from "react-icons/hi";



function Tech() {
  return (
    <>

      <div className="h-screen flex justify-center items-center relative">

        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${itech})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Navbar />
          <div className="text-center text-white mt-40 mx-4 md:mx-10 lg:mx-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">POWERING THE FUTURE WITH CUTTING-EDGE TECHNOLOGY</span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif mb-8">
              Harnessing innovation to empower businesses and lives. Forward-thinking solutions for success in a digital age.
            </h2>
          </div>
        </div>

      </div>




      <div className="flex-row mx-1 ">
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="text-2xl font-bold text-center text-[#A47E1B]">Product Section</h1>
          <hr className="border-[#A47E1B] ext-center border-2 w-10" />
        </div>
      </div>
      {/*
<div class="container mx-auto">
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    <div>
      <img src={itech4} alt="about" class="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div class="space-y-8">
      <div>
        <p class="text-2xl sm:text-xl font-serif mt-12 font-bold">Smart Analytics Platform</p>
        <p class="text-xl sm:text-lg font-serif leading-9 mt-auto">Our advanced analytics platform provides real-time data visualization, predictive analytics, and actionable insights. By harnessing the power of big data, businesses can make informed decisions, optimize processes, and identify growth opportunities with ease.</p>
      </div>
      <div>
        <p class="text-2xl sm:text-xl font-serif font-bold">Intelligent Security Systems</p>
        <p class="text-xl sm:text-lg font-serif leading-9 mt-auto">With our state-of-the-art security solutions, we protect businesses from evolving cyber threats. From robust firewalls and intrusion detection systems to secure access controls and data encryption, we safeguard critical assets and ensure data integrity.</p>
      </div>
      <div>
        <p class="text-xl sm:text-lg font-serif font-bold">Collaborative Workflow Tools</p>
        <p class="text-xl sm:text-lg font-serif leading-9 mt-auto">Our intuitive collaboration tools empower teams to seamlessly connect, communicate, and collaborate. With features like document sharing, project management, and virtual meetings, businesses can enhance productivity and foster innovation.</p>
      </div>
    </div>
  </div>
</div>
*/}

      <div class="flex flex-col items-center justify-center">
        <div class="grid grid-cols-1 grid gap-24 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-4/5">
          <div>
            <img src={itech4} alt="about" class="w-full  mt-3 h-full rounded-lg shadow-lg sm:max-w-full sm:h-auto md:w-full md:h-150% md:max-h-none" />
          </div>

          <div class="justify-items-center mt-16">
            <div>
              <span class="inline-flex items-baseline">
                <HiCode size={20} class= "mr-2"/>
                <p class="text-2xl font-serif mt-3 font-bold"> Smart Analytics Platform
              </p>
               </span>
              <p class="text-xl font-serif leading-9 mt-auto">Our advanced analytics platform provides real-time data visualization, predictive analytics, and actionable insights. By harnessing the power of big data, businesses can make informed decisions, optimize processes, and identify growth opportunities with ease.</p>
            </div>
            <div>
            <span class="inline-flex items-baseline">
                <HiCode size={20} class= "mr-2"/>
              <p class="text-2xl font-serif mt-12 font-bold">Intelligent Security Systems</p>
              </span>
              <p class="text-xl font-serif leading-9 mt-auto">With our state-of-the-art security solutions, we protect businesses from evolving cyber threats. From robust firewalls and intrusion detection systems to secure access controls and data encryption, we safeguard critical assets and ensure data integrity.</p>
            </div>
            <div>
            <span class="inline-flex items-baseline">
                <HiCode size={20} class= "mr-2"/>
              <p class="text-2xl font-serif mt-12 font-bold">Collaborative Workflow Tools</p>
              </span>
              <p class="text-xl font-serif leading-9 mt-auto">Our intuitive collaboration tools empower teams to seamlessly connect, communicate, and collaborate. With features like document sharing, project management, and virtual meetings, businesses can enhance productivity and foster innovation.</p>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="flex flex-col items-center mx-5">
         
      <div className="flex items-center">
            <svg className="w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            <p className="m-2 text-lg font-bold leading-tight leading-8">Intelligent Security Systems</p>
            <p className="m-2 max-w-lg text-xl leading-relaxed text-gray-900 leading-8">With our state-of-the-art security solutions, we protect businesses from evolving cyber threats. From robust firewalls and intrusion detection systems to secure access controls and data encryption, we safeguard critical assets and ensure data integrity.</p>
          </div>


          <div className="flex items-center">
            <svg className="w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            <p className="m-2 text-lg font-bold leading-tight leading-8">Intelligent Security Systems</p>
            <p className="m-2 max-w-lg text-xl leading-relaxed text-gray-900 leading-8">With our state-of-the-art security solutions, we protect businesses from evolving cyber threats. From robust firewalls and intrusion detection systems to secure access controls and data encryption, we safeguard critical assets and ensure data integrity.</p>
          </div>

          <div className="flex items-center">
            <svg className="w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
            </svg>
            <p className="m-2 text-lg font-bold leading-tight leading-8">Collaborative Workflow Tools</p>
            <p className="m-2 max-w-lg text-xl leading-relaxed text-gray-900 leading-8">Our intuitive collaboration tools empower teams to seamlessly connect, communicate, and collaborate. With features like document sharing, project management, and virtual meetings, businesses can enhance productivity and foster innovation.</p>
          </div>
        </div>
    </div>*/}



      <div className="flex flex-col items-center justify-center mt-4 ">
        <h1 className="text-2xl font-bold text-[#A47E1B] mt-5">Our Technological Expertise</h1>
        <hr className="border-[#A47E1B] border-2 w-10 items-center no-underline" />
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          <div className="m-8">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
            >
              <div className="bg-gray-200 p-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <p className="text-base font-bold">Artificial Intelligence</p>
                </div>
              </div>
              <p className="text-xl">
                Leveraging the potential of AI, we develop intelligent systems that automate processes, enhance decision-making, and improve overall efficiency. From machine learning algorithms to natural language processing, our AI solutions empower businesses to unlock new possibilities and gain a competitive edge.
              </p>
            </Card>
          </div>

          <div className="m-8">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
            >
              <div className="bg-gray-200 p-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <p className="text-base font-bold">Internet Of Things</p>
                </div>
              </div>
              <p className="text-xl">
                Our expertise in IoT enables seamless connectivity and data exchange between devices, providing real-time insights for enhanced operations. We design and implement smart ecosystems that optimize resource utilization, enable remote monitoring, and facilitate predictive maintenance across various sectors.
              </p>
            </Card>
          </div>
          <div className="m-8">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
            >
              <div className="bg-gray-200 p-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <p className="text-base font-bold">Cloud Computing Solutions</p>
                </div>
              </div>
              <p className="text-xl">
                As pioneers in cloud computing, we offer scalable and secure cloud infrastructure services. Our tailored solutions ensure seamless data storage, high availability, and reliable performance, empowering businesses to streamline operations, reduce costs, and drive scalability.
              </p>
            </Card>
          </div>


        </div>
      </div>

      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-2xl font-bold  text-[#A47E1B]">Service Section</h1>
        <hr className="border-[#A47E1B] border-2 w-10 items-center" />

        <div className="flex flex-row justify-evenly items-center flex-wrap">
          <div className="m-9">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
              cover={<img alt="example" src={Itech3} />}>
              <p className="text-lg font-bold"> Custom Software Development</p>
              <p className="text-xl">We offer end-to-end software development services tailored to your unique requirements. From conceptualization to implementation and ongoing support, our expert team ensures that your software solution aligns perfectly with your business goals.</p>
            </Card>
          </div>

          <div className="m-4">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
              cover={<img alt="example" src={Itech13} />}>
              <p className="text-lg font-bold"> IT Consultancy and Support</p>
              <p className="text-xl">Our experienced consultants provide strategic guidance and expert advice on leveraging technology for maximum impact. We offer comprehensive IT support services, including system audits, network management, and proactive maintenance.</p>
            </Card>
          </div>

          <div className="m-4">
            <Card
              hoverable
              style={{ width: 350, borderRadius: 32, margin: '20px' }}
              cover={<img alt="example" src={Itech5} />}>
              <p className="text-lg font-bold"> Training and Education</p>
              <p className="text-xl">To empower organizations with the necessary skills, we provide training programs and workshops on emerging technologies. From executive-level seminars to hands-on technical training, we equip your workforce with the knowledge needed to embrace digital transformation.</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center m-2">
        <h1 className="text-2xl font-bold text-[#A47E1B]">Projects Section</h1>
        <hr className="border-[#A47E1B] border-2 w-10 items-center" />
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {/* Add your content here */}
        </div>
      </div>

      <div class="projectsection m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div class="card p-2 bg-white mx-auto rounded-sm relative">
          <img src={Itech12} alt="" class="block mx-auto relative z-10" />
          <div class="text-container">
            <p class="text-center font-bold text-white text-xl absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-0 w-full z-20  bg-opacity-50">Learn more</p>
          </div>
        </div>

        <div class="card p-2 bg-white mx-auto rounded-sm relative">
          <img src={Itech9} alt="" class="block mx-auto relative z-10" />
          <div class="text-container">
            <p class="text-center font-bold text-white text-xl absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-0 w-full z-20 bg-opacity-50">Learn more</p>
          </div>
        </div>

        <div class="card p-2 bg-white mx-auto rounded-sm relative">
          <img src={Itech7} alt="" class="block mx-auto relative z-10" />
          <div class="text-container">
            <p class="text-center font-bold text-white text-xl absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-0 w-full z-20 bg-opacity-50">Learn more</p>
          </div>
        </div>
      </div>
      <div class="projectsection m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div class="card p-2 bg-white mx-auto rounded-sm relative">
          <img src={Itech8} alt="" class="block mx-auto relative z-10" />
          <div class="text-container">
            <p class="text-center font-bold text-white text-xl absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-0 w-full z-20 bg-opacity-50">Learn more</p>
          </div>
        </div>

        <div class="card p-2 bg-white mx-auto rounded-sm relative">
          <img src={Itech10} alt="" class="block mx-auto relative z-10" />
          <div class="text-container">
            <p class="text-center font-bold text-white text-xl absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-0 w-full z-20  bg-opacity-50">Learn more</p>
          </div>
        </div>
      </div>






    </>
  )
}

export default Tech
