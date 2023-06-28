import { Carousel } from 'antd';
import { Card } from 'antd';
import Navbar from './Navbar';
import "./Navbar.css"
import itech from "../assets/Itech.jpg"
import itech2 from "../assets/Itech2.jpg"
import itech3 from "../assets/Itech3.jpg"
import itech4 from "../assets/Itech4.png"
import Itech5 from "../assets/Itech5.jpg"
import Itech6 from "../assets/Itech6.jpg"
import Itech7 from "../assets/Itech7.jpg"
import Itech8 from "../assets/Itech8.jpg"
import Itech9 from "../assets/Itech9.jpg"




function Tech() {
  return (
    <>




<div classNameName="h-screen flex justify-center items-center relative">
        <div
          classNameName="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${itech})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', // or 'cover'
            height: '600px' // Adjust the desired height here
          }}
        >
          <Navbar />
          <div className="text-center text-white mt-40 justify-center item-center mb-4">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">POWERING THE FUTURE WITH CUTTING-EDGE TECHNOLOGY</span>
            </h1>
            <h2 className="text-2xl font-serif  mb-8">
            Harnessing innovation to empower businesses and lives. Forward-thinking solutions for success in a digital age.
            </h2>
          </div>
        </div>

    </div>


    <div className='flex-row'>

            <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="text-2xl font-bold text-center text-[#A47E1B]">PRODUCT SECTION</h1>
                    <hr className="border-[#A47E1B] ext-center border-2 w-10" />
            </div>
           
 <div className="grid grid-cols-2 gap-4">
  <div>
    <img src={itech4} alt="about" className="w-full h-full rounded-lg shadow-lg" />
  </div>

  <div className="bg-gray-200 p-4">
  <div className="w-30 h-30">
  <p className="text-lg font-bold leading-tight">Tech Company</p>
  <p className="text-sm leading-snug">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
</div>
<div className="w-30 h-30">
  <p className="text-lg font-bold leading-tight">Tech Company</p>
  <p className="text-sm leading-snug">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
</div>
<div className="w-30 h-30">
  <p className="text-lg font-bold leading-tight">Tech Company</p>
  <p className="text-sm leading-snug">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
</div>
  
</div>

  </div>

    </div>




    <div className="flex flex-col items-center justify-center m-4">
  <h1 className="text-2xl font-bold text-[#A47E1B]">Our Technological Expertise</h1>
  <hr className="border-[#A47E1B] border-2 w-10 items-center no-underline" />
  <div className="flex flex-row justify-evenly items-center flex-wrap">
   
     
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                        
                    >
                        <p className="text-lg font-bold"> Artificial Intelligence</p>
                        <p className="text-sm"> Leveraging the potential of AI, we develop intelligent systems that automate processes, enhance decision-making, and improve overall efficiency. From machine learning algorithms to natural language processing, our AI solutions empower businesses to unlock new possibilities and gain a competitive edge.
.</p>

                    </Card>
                </div>
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                     
                    >
                        <p className="text-lg font-bold"> Internet Of Things</p>
                        <p className="text-sm">Our expertise in IoT enables seamless connectivity and data exchange between devices, providing real-time insights for enhanced operations. We design and implement smart ecosystems that optimize resource utilization, enable remote monitoring, and facilitate predictive maintenance across various sectors.</p>
                    </Card>
                </div>
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                    >
                        <p className="text-lg font-bold"> Cloud Computing Solutions</p>
                        <p className="text-sm">As pioneers in cloud computing, we offer scalable and secure cloud infrastructure services. Our tailored solutions ensure seamless data storage, high availability, and reliable performance, empowering businesses to streamline operations, reduce costs, and drive scalability.
.</p>

                    </Card>
                </div>
                </div>
        </div>
        <div className="flex flex-col items-center justify-center m-4">
            <h1 className="text-2xl font-bold  text-[#A47E1B]">Service Section</h1>
            <hr className="border-[#A47E1B] border-2 w-10 items-center" />
            <div className="flex flex-row justify-evenly items-center flex-wrap">
    
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                        cover={<img alt="example" src={itech2} />}
                    >
                        <p className="text-lg font-bold"> Custom Software Development</p>
                        <p className="text-sm">We offer end-to-end software development services tailored to your unique requirements. From conceptualization to implementation and ongoing support, our expert team ensures that your software solution aligns perfectly with your business goals..</p>

                    </Card>
                </div>
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                        cover={<img alt="example" src={itech2} />}
                    >
                        <p className="text-lg font-bold"> IT Consultancy and Support</p>
                        <p className="text-sm">Our experienced consultants provide strategic guidance and expert advice on leveraging technology for maximum impact. We offer comprehensive IT support services, including system audits, network management, and proactive maintenance, ensuring uninterrupted operations.</p>

                    </Card>
                </div>
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                        cover={<img alt="example" src={itech2} />}
                    >
                        <p className="text-lg font-bold"> Training and Education</p>
                        <p className="text-sm">To empower organizations with the necessary skills, we provide training programs and workshops on emerging technologies. From executive-level seminars to hands-on technical training, we equip your workforce with the knowledge needed to embrace digital transformation.</p>

                    </Card>
                </div>
                
                </div>
                
        </div>
        <div className="flex flex-col items-center justify-center m-4">
            <h1 className="text-2xl font-bold  text-[#A47E1B]">Projects Section</h1>
            <hr className="border-[#A47E1B] border-2 w-10 items-center" />
            <div className="flex flex-row justify-evenly items-center flex-wrap">
    </div>
    </div><div class="grid grid-cols-2 gap-4">
  
  <img src={Itech7} alt="Image 3" class="w-45 h-45 object-cover" />
  <img src={Itech8} alt="Image 4" class="w-45 h-45 object-cover" />
  <img src={Itech9} alt="Image 5" class="w-45 h-45 object-cover" />
  <img src={Itech5} alt="image 1" class="w-45 h-45 object-cover" />
  <img src={Itech6} alt="Image 2" class="w-45 h-45 object-cover" />
</div>



</>
  )
}

export default Tech
