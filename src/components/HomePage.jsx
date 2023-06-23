import Navbar from "./Navbar"
import bg from '../assets/bg.png'


function HomePage() {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
            <Navbar />
        </div>
    )
}

export default HomePage
