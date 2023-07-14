import { Card } from 'antd';
import image from "../assets/image3.jpg"
import writing from "../assets/writi.png"
import art from "../assets/arti.png"
function Service() {
    return (

        <div className="flex flex-col items-center justify-center m-4">
            <h1 className="text-2xl font-bold  text-[#A47E1B]">OUR SERVICES</h1>
            <hr className="border-[#A47E1B] border-2 w-10 items-center" />
            <div className="flex flex-row justify-evenly items-center flex-wrap">
                {/* Tech */}
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, }}
                        cover={<img alt="example" src={image} />}
                    >
                        <p className=" text-lg font-bold"> Tech Company</p>
                        <p className="text-sm">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>

                    </Card>
                </div>
                {/* Art */}
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, }}
                        cover={<img alt="example" src={writing} />}
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
                        cover={<img alt="example" src={art} />}
                    >
                        <p className="text-lg font-bold"> Art Gallery</p>
                        <p className="text-sm">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default Service
