import background from "../assets/artpage.jpg"
function Art() {
  return (

      <>
<div className="h-screen flex justify-center items-center relative">
  <div
    className="absolute inset-0 bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover' // or 'cover'
    }}
  >
    <div className="text-center text-white mt-60 mb-4">
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-[#ffff]">IGNITE YOUR CREATIVITY IN A CAPTIVATING ART SPACE</span>
      </h1>
      <h2 className="text-xl font-serif font-medium mb-8">
        Celebrate art and connection in our immersive space.<br></br> Artists showcase, art enthusiasts connect. Join us at Nyakwar Opere Art Space.
      </h2>
    </div>
  </div>
</div>


        </>
  )
}

export default Art
