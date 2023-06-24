import background from "../assets/art.jpg"
import Navbar from "./Navbar"
import abstract from "../assets/abstract.jpg"
import finearts from "../assets/finearts.jpg"
import traditional from "../assets/traditional.jpg"
import { Card } from 'antd';
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
          <div classNameName="text-center text-white mt-60 mb-4">
            <h1 classNameName="text-4xl font-bold mb-4">
              <span classNameName="text-[#ffff]">IGNITE YOUR CREATIVITY IN A CAPTIVATING ART SPACE</span>
            </h1>
            <h2 classNameName="text-xl font-serif font-medium mb-8">
              Celebrate art and connection in our immersive space.<br></br> Artists showcase, art enthusiasts connect. Join us at Nyakwar Opere Art Space.
            </h2>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-2xl font-bold  text-[#A47E1B]">VIRTUAL EXHIBITIONS</h1>
        <hr className="border-[#A47E1B] border-2 w-10 items-center" />
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {/* Tech */}
          <div className="m-4">
            <div className="w-72 bg-white hover">
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
          {/* Art */}
          <div className="m-4">
            <Card
              hoverable
              style={{ width: 332 }}
              cover={<img alt="example" src={abstract} />}
            >
              <p className="text-lg font-bold"> Writing Agency</p>
              <p className="text-sm">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>

            </Card>
          </div>
          {/* Writing */}
          <div className="m-4">
            <Card
              hoverable
              style={{ width: 332 }}
              cover={<img alt="example" src={traditional} />}
            >
              <p className="text-lg font-bold"> Art Gallery</p>
              <p className="text-sm">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
            </Card>
          </div>
        </div>
      </div>


    </>
  )
}

export default Art
