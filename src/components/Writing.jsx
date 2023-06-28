import { Carousel } from 'antd';
import Navbar from './Navbar';
import "./Navbar.css"
import Writing1 from "../assets/Writing1.png"
//import Writing2 from "../assets/Writing2.png"
//import Writing3 from "../assets/Writing3.png"
import Writing4 from "../assets/Writing4.png"
import Writing5 from "../assets/Writing5.png"


function Writing() {
  return (

    <>
    <div classNameName="h-screen flex justify-center items-center relative">
        <div
          classNameName="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Writing4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', // or 'cover'
            height: '600px' // Adjust the desired height here
          }}
        >
          <Navbar />
          <div className="text-center text-white mt-40 justify-center item-center mb-4">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">UNLOCK THE POWER OF WORDS WITH PROFESSIONAL WRITING SERVICES</span>
            </h1>
            <h2 className="text-2xl font-serif  mb-8">
             Unleash the power of words with Nyakwar Opere Writing Agency. Elevate your brand, captivate your audience, and achieve remarkable success.
            </h2>
          </div>
        </div>

      </div>

      

 <div class="main-container mb-2 flex flex-row flex-wrap justify-between">
 
  <div class="grid flex-row grid-cols-1 md:grid-cols-2 w-full">
    <div class="bg-[#b39231] text-center mt-1">
      <img alt="example" src={Writing1} class="h-auto mt-2 mb-2 rounded-lg na w-2/3 mx-auto" />
    </div>

    <div class="bg-[#806517] text-center font-serif mt-1">
      <h1 class="text-3xl font-bold mt-4">Copyrighting</h1>
      <p class="text-xl mt-1">
        Crafting persuasive and compelling written content for marketing materials, advertisements, websites, social media, brochures, and more. This includes creating catchy headlines, taglines, product descriptions, and promotional content.
      </p>
    </div>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-2 w-full">
    <div class="bg-[#806517] text-center font-serif">
      <h1 class="text-3xl font-bold mt-4">Content Writing</h1>
      <p class="text-xl mt-4">
        Generating engaging and informative content for blogs, articles, white papers, case studies, newsletters, and e-books. This involves research, topic ideation, and creating well-structured and engaging written pieces.
      </p>
    </div>

    <div class="bg-[#b39231] text-center font-serif">
      <img alt="example" src={Writing5} class="h-auto mt-2 mb-2 rounded-lg na w-2/3 mx-auto" />
    </div>
  </div>

 
  <div class="grid grid-cols-1 md:grid-cols-2 w-full">
    <div class="bg-[#b39231] text-center1">
      <img alt="example" src={Writing4} class="h-auto mt-2 mb-2 rounded-lg na w-2/3 mx-auto" />
    </div>

    <div class="bg-[#806517] text-center font-serif ">
      <h1 class="text-3xl font-bold mt-4">SEO Writing</h1>
      <p class="text-xl mt-1">
        Writing optimized content that incorporates relevant keywords and follows search engine optimization (SEO) best practices to improve organic search rankings and attract targeted traffic to websites or blogs.
      </p>
    </div>
  </div>
</div>



      {/*services*/}
      <div class="services bg-[#806517] p-4 sm:p-8 md:p-12">
        <h1 class="text-lg sm:text-xl md:text-2xl text-white text-center font-bold">WOULD YOU LIKE TO GET OUR SERVICES?</h1>
        <p class="text-white text-center mt-3 text-lg sm:text-xl md:text-2xl">
          We offer the best services and give quality customer journey experience. You can never go wrong with choosing us. We prioritize delivering exceptional results. Send us a message, and our agent will reach out to you promptly.
        </p>
        <form class="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input type="text" placeholder="Name" class="px-4 py-2 border border-gray-300 rounded-lg mb-2 sm:mr-2" />
          <input type="text" placeholder="Message" class="px-4 py-2 border border-gray-300 rounded-lg mb-2 sm:mr-2" />
          <button type="submit" class="px-4 py-2 bg-[#d6aa24] text-white font-bold border border-[#806517] rounded-lg">Send</button>
        </form>
      

      </div>


     


    

     






        
          
      
    
   
    
    </>
  )
}

export default Writing
