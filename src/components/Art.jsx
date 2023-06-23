import background from "../assets/art.jpg"
import Navbar from "./Navbar"
function Art() {
  return (

    <>
      <div classNameName="h-screen flex justify-center items-center relative">
        <div
          classNameName="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover' // or 'cover'
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
      <div className="flex justify-center items-center">
        <h3 className="text-center font-bold">VIRTUAL EXHIBITIONS</h3>
      </div>
      <div className="flex justify-center">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{ maxWidth: '300px' }}>
      <img
        className="rounded-t-lg h-40 object-cover"
        src="https://t3.ftcdn.net/jpg/05/58/39/58/240_F_558395850_qRCV473bBASDTKxNd9azjBXzr7mBgij5.jpg"
        alt=""
      />
      <div className="p-4">
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>

    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{ maxWidth: '300px' }}>
      <img
        className="rounded-t-lg h-40 object-cover"
        src="https://i.pinimg.com/564x/0a/66/5f/0a665ff60a64ea50405019a58d04230c.jpg"
        alt=""
      />
      <div className="p-4">
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>

    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{ maxWidth: '300px' }}>
      <img
        className="rounded-t-lg h-40 object-cover"
        src="https://i.pinimg.com/564x/cd/c5/b5/cdc5b5a646833a3e065b86c4e76671f4.jpg"
        alt=""
      />
      <div className="p-4">
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Art
