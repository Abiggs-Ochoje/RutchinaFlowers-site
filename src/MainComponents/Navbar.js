
import { useState } from "react";
import { HashLink as Link  } from 'react-router-hash-link';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };



  return (
    <div >
 <nav className="relative z-50 pt-2 px-2 lg:px-8 drop-shadow-md text-black ">
  {/* Wrapper: different for large and medium screens */}
  <div className="flex items-center justify-between lg:justify-center ">

    {/* Logo: always on the left */}
    <div className="flex lg:justify-center md:flex-1 lg:flex-initial  ">
      <Link to='/'>
        <img
          src={require("./assets/images/Logo-removebg-preview.png")}
          alt="Rutchina flowers Logo"
          className="w-52 hover:scale-105 transition-all"
          id="small-logo"
        />
      </Link>
    </div>

    {/* Large screen nav links */}
    <ul className="hidden lg:flex items-center gap-4 font-bold text-base">
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#nav">Home</Link></li>
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#product">Product</Link></li>
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#flower-type">Flower Types</Link></li>
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#gallery">Gallery</Link></li>
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#about">About Us</Link></li>
      <li className="hover:bg-yellow-500 hover:px-2 text-white rounded-md transition-all cursor-pointer text-lg"><Link to="#location">Contact Us</Link></li>
    </ul>

    {/* Button: 
        - hidden on small,
        - centered on medium using absolute positioning
        - inline on large
    */}
    <div className="hidden md:flex lg:flex lg:ml-6 md:left-1/2 ">
      <button className="bg-slate-100 drop-shadow rounded px-4 py-1.5 text-green-800 hover:bg-amber-300 font-bold">
       <a href="http://wa.me/message/XHB2H2ZDZ2A6C1" target="_blank" rel="noopener noreferrer">Order Now</a>
      </button>
    </div>

    {/* Hamburger menu icon for small and medium screens */}
    <div className="flex-1 flex justify-end lg:hidden mr-4">
      <button
        className="text-4xl cursor-pointer"
        onClick={handleClick}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <i className="bx bx-menu"></i>
      </button>
    </div>
  </div>

  {/* Mobile dropdown menu */}
  <div className={`absolute lg:hidden top-32 left-0 w-52 bg-yellow-400 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ml-4 rounded z-50
    ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
    style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
  >
    <ul>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#nav">Home</Link></li>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#product">Product</Link></li>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#flower-type">Flower Type</Link></li>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#gallery">Gallery</Link></li>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#about">About Us</Link></li>
      <li className="list-none w-full text-center p-4 hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"><Link to="#location">Contact Us</Link></li>
    </ul>

      <button className="md:hidden mb-4 bg-slate-100 drop-shadow rounded px-4 py-1.5 text-green-800 hover:bg-amber-300 font-bold">
       <a href="http://wa.me/message/XHB2H2ZDZ2A6C1" target="_blank"rel="noopener noreferrer" > Order Now</a>
      </button>
  </div>
</nav>

    </div>

  )
}


export default Navbar;