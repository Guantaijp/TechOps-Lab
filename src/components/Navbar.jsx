import { Link, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../assets/logo2.png"


function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Add an event listener to handle scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       navigate('/about');
//   }
// };




  

  return (
    <div className={`font-sans sticky top-0 z-50 w-full ${scroll ? 'opacity-90 bg-black' : 'bg-transparent'}`}>
      <div className="flex flex-row justify-between items-center p-6">
        {/* <h1 className={`text-2xl font-bold text-white hover:text-[#A47E1B] ${showMenu ? 'text-start' : 'text-center lg:text-start'}`}>
          TechOps Lab
        </h1> */}
        <img src={logo} alt="logo" className="w-50 h-10" />
        <div className="flex items-center">
          <button className="p-2 text-white font-bold focus:outline-none lg:hidden" onClick={toggleMenu}>
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div className={`${showMenu ? 'flex flex-col left-0' : 'hidden'} lg:flex lg:flex-row items-start mt-2 lg:mt-0`}>
            <Link to="/" className="p-2 hover:text-[#A47E1B] text-white font-bold">HOME</Link>
            <Link to="/tech" className="p-2 hover:text-[#A47E1B] text-white font-bold">TECHCOMPANY</Link>
            <Link to="/writing" className="p-2 hover:text-[#A47E1B] text-white font-bold">WRITINGAGENCY</Link>
            <Link to="/art" className="p-2 hover:text-[#A47E1B] text-white font-bold">ARTGALLERY</Link>
            {/* <a className="p-2 hover:text-[#A47E1B] text-white font-bold" onClick={scrollToAbout}>
              ABOUT
            </a>
            <Link to="/contact" className="p-2 hover:text-[#A47E1B] text-white font-bold">CONTACT</Link> */}
          </div>
        </div>
      </div>
    </div>





  );
}

export default Navbar;

