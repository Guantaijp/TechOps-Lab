import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`font-sans sticky top-0 z-50 w-full ${
        scroll ? 'opacity-90 bg-black' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row justify-around items-center p-6">
        <h1 className="text-2xl font-bold text-white hover:text-[#A47E1B]">
          TechOps Lab
        </h1>
        <div className="flex flex-row  items-center">
          <Link
            to="/"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            HOME
          </Link>
          <Link
            to="/tech"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            TECHCOMPANY
          </Link>
          <Link
            to="/writing"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            WRITINGAGENCY
          </Link>
          <Link
            to="/art"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            ARTGALLERY
          </Link>
          <Link
            to="/about"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="p-2 hover:text-[#A47E1B] text-white font-bold"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

