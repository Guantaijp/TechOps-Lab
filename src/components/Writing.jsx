// import { Carousel } from 'antd';
import Navbar from './Navbar';
import "./Navbar.css"


import Writing1 from "../assets/writing1.png"

import Writing4 from "../assets/writing4.png"
import Writing5 from "../assets/writing5.png"

// import Writing2 from "../assets/Writing2.png"
// import Writing3 from "../assets/Writing3.png"
function Writing() {

  function sorry() {
    // Get the current URL
    const currentURL = window.location.href;
  
    // Check if the URL contains "localhost"
    if (!currentURL.includes("localhost")) {
      alert("Sorry, you are not currently allowed to send messages.");
    }
  }

  return (

    <>
<div className="h-screen flex justify-center items-center relative">

    <div
      className="absolute inset-0 bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Writing4})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <div className="text-center text-white mt-40 mx-4 md:mx-10 lg:mx-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-white">UNLOCK THE POWER OF WORDS WITH PROFESSIONAL WRITING SERVICES</span>
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-serif mb-8">
          Unleash the power of words with TechOps Writing Agency. Elevate your brand, captivate your audience, and achieve remarkable success.
        </h2>
      </div>
    </div>

</div>



      

<div className="main-container mb-1 mt-1  flex flex-row flex-wrap justify-between">
 
    <div className="grid flex-row grid-cols-1 md:grid-cols-2 w-full">
      <div className="bg-[#b39231] text-center">
        <img alt="example" src={Writing1} className="h-auto mt-5 mb-5 rounded-lg na w-2/3 mx-auto" />
      </div>
     
      <div className="bg-[#806517] text-center font-serif flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mt-1">Copyrighting</h1>
        <p className="text-xl mt-1 p-3">
          Crafting persuasive and compelling written content for marketing materials, advertisements, websites, social media, brochures, and more. This includes creating catchy headlines, taglines, product descriptions, and promotional content.
        </p>
       </div>
  
    </div>


   {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="bg-[#806517] text-center font-serif flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-4">Content Writing</h1>
          <p className="text-xl mt-4">
            Generating engaging and informative content for blogs, articles, white papers, case studies, newsletters, and e-books. This involves research, topic ideation, and creating well-structured and engaging written pieces.
          </p>
        </div>

        <div className="bg-[#b39231] text-center font-serif">
          <img alt="example" src={Writing5} className="h-auto mt-2 mb-2 rounded-lg na w-2/3 mx-auto" />
        </div>
    </div>*/}

    
  <div className="grid grid-cols-1 md:grid-cols-2 w-full">
    <div className="bg-[#b39231] text-center font-serif md:flex-row md:justify-end md:order-2 flex-col-reverse">
      <img alt="example" src={Writing5} className="h-auto mt-5 mb-5 rounded-lg na w-2/3 mx-auto" />
    </div>

    <div className="bg-[#806517] text-center font-serif md:flex-row md:justify-start md:order-1">
      <h1 className="text-3xl font-bold mt-4">Content Writing</h1>
      <p className="text-xl mt-4 p-3">
        Generating engaging and informative content for blogs, articles, white papers, case studies, newsletters, and e-books. This involves research, topic ideation, and creating well-structured and engaging written pieces.
      </p>
    </div>
  </div>

 

 
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="bg-[#b39231] text-center1">
        <img alt="example" src={Writing4} className="h-auto mt-5 mb-5 rounded-lg na w-2/3 mx-auto" />
      </div>

      <div className="bg-[#806517] text-center font-serif flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold mt-4">SEO Writing</h1>
        <p className="text-xl mt-1 p-3">
          Writing optimized content that incorporates relevant keywords and follows search engine optimization (SEO) best practices to improve organic search rankings and attract targeted traffic to websites or blogs.
        </p>
      </div>
    </div>
</div>




      {/*services*/}
      <div className="services bg-[#806517] p-4 sm:p-8 md:p-12">
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-serif text-center font-bold">WOULD YOU LIKE TO GET OUR SERVICES?</h1>
        <p className="text-white text-center mt-3 font-serif text-lg sm:text-xl md:text-2xl">
          We offer the best services and give quality customer journey experience. You can never go wrong with choosing us. We prioritize delivering exceptional results. Send us a message, and our agent will reach out to you promptly.
        </p>
        <form className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input type="text" placeholder="Name" className="px-4 py-2 border border-gray-300 rounded-lg mb-2 sm:mr-2" />
          <input type="text" placeholder="Message" className="px-4 py-2 border border-gray-300 rounded-lg mb-2 sm:mr-2" />
          <button onClick={sorry} type="submit" className="px-4 py-2 bg-[#d6aa24] text-white font-bold border border-[#806517] rounded-lg">Send</button>
        </form>


      </div>


    </>
  )
}

export default Writing
