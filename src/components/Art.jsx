import background from "../assets/art.jpg"
import Navbar from "./Navbar"
import abstract from "../assets/abstract.jpg"
import finearts from "../assets/finearts.jpg"
import traditional from "../assets/traditional.jpg"
import exhibi from "../assets/exhibi.jpg"
function Art() {
  return (

    <>
      <div classNameName="h-screen flex justify-center items-center relative">
        <div
          classNameName="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', // or 'cover'
            height: '600px' // Adjust the desired height here
          }}
        >
          <Navbar />
          <div className="text-center text-white mt-40 justify-center item-center mb-4">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">IGNITE YOUR CREATIVITY IN A CAPTIVATING ART SPACE</span>
            </h1>
            <h2 className="text-2xl font-serif  mb-8">
              Celebrate art and connection in our immersive space.<br></br> Artists showcase, art enthusiasts connect. Join us at TechOps Lab Art Space.
            </h2>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <h1 className="text-2xl font-bold  text-[#A47E1B]">VIRTUAL EXHIBITIONS</h1>
        <hr className="border-[#A47E1B] border-2 w-10 items-center" />
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {/* Tech */}
          <div className="hover:shadow-xl mx-2">
            <div className="w-72 bg-white ">
              <h1 className="text-start text-lg font-bold">Fine Arts</h1>
              <hr className="border-gray-300 mt-2" />
              <img alt="example" src={finearts} className="w-full h-40 object-cover mt-2" />
              <div className="my-4">
                <p className="text-lg font-serif">Boundless Expressions</p>
                <p className="text-lg font-serif ">Reflecting Beauty</p>
                <p className="text-lg font-serif">Challenging Perspectives</p>
              </div>
            </div>
          </div>

          <div className="hover:shadow-xl mx-2">
            <div className="w-72 bg-white ">
              <h1 className="text-start text-lg font-bold">Abstract arts</h1>
              <hr className="border-gray-300 mt-2" />
              <img alt="example" src={abstract} className="w-full h-40 object-cover mt-2" />
              <div className="my-4">
                <p className="text-lg font-serif">Unbound Creativity</p>
                <p className="text-lg font-serif ">Dynamic Expressions</p>
                <p className="text-lg font-serif">Provoking Interpretations</p>
              </div>
            </div>
          </div>

          <div className="hover:shadow-xl mx-2">
            <div className="w-72 bg-white ">
              <h1 className="text-start text-lg font-bold">Traditional arts</h1>
              <hr className="border-gray-300 mt-2" />
              <img alt="example" src={traditional} className="w-full h-40 object-cover mt-2" />
              <div className="my-4">
                <p className="text-lg font-serif">Time-Honored Mastery</p>
                <p className="text-lg font-serif ">Preserving Heritage</p>
                <p className="text-lg font-serif">Enduring Elegance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full">
          <div className="bg-[#F1C644] text-center font-serif mt-8">
            <h1 className="text-3xl font-bold mt-4">RETROSPECTIVE EXHIBITIONS</h1>
            <p className="text-xl mt-4">
              Retrospective exhibitions celebrate the artistic journey and achievements of an artist over a significant period. They feature a comprehensive collection of artworks that span the artist's entire career. Retrospectives provide a retrospective view of an artist's evolution, influences, and significant contributions to the art world.
            </p>
          </div>

          <div className="bg-[#F1C644] text-center font-serif mt-8">
            <img alt="example" src={exhibi} className="h-full mx-auto"></img>
          </div>
        </div>


      </div>


    </>
  )
}

export default Art
