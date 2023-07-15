import about from '../assets/comp.jpg'

function About() {
    return (

        <section id="about">
        <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center m-4">
                <h1 className="text-2xl font-bold  text-[#A47E1B] mt-4">ABOUT US </h1>
                <hr className="border-[#A47E1B] border-2 w-10 items-center" />
            </div>
            <div className="flex flex-row items-center flex-wrap w-4/5 justify-between">
                <img src={about} alt="about" className="w-1/2 h-1/2 rounded-lg shadow-lg" />
                <div className="w-1/2 h-1/2">
                    <p className="text-lg font-bold"> Tech Company</p>
                    <p className="text-sm">Nyakwar Opere Art Space, a creative haven where art comes to life. We are dedicated to providing a vibrant and inspiring environment for artists from all disciplines. Whether you're a painter or fine artist, our art space is designed to nurture your talent and foster collaboration. Join us as we celebrate the power of art and create a community where imagination knows no bounds.</p>
                </div>
            </div>
        </div>
        </section>

    )
}

export default About
