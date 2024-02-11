import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Welcome = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] =useState('transparent')
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  useEffect(() => {
    const listenScrollEvent = () => {
      console.log("Scrolling...");
      console.log("Scroll position:", window.scrollY);
      setHeaderColor(window.scrollY > 30 ? "black" : "transparent");
      
    };
  
    window.addEventListener("scroll", listenScrollEvent);
  
    
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [headerColor]); 
  
  










  return (
    <div className=''>
      
      
      <div class='relative hidden  sm:hiddden md:block lg:block'>
  <img class='w-full' src='https://cdn.pixabay.com/photo/2023/10/25/22/14/food-8341388_640.jpg' alt='Food Image' />

  <div class='absolute top-0 left-0 w-full text-center'>
    <header style={{ backgroundColor: headerColor }} className='border
     border-black flex justify-around fixed top-0 z-10 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  md:text-6xl lg:text-7xl  mb-3'>Anis</h1>
      <div>
        <ul className=' flex justify-center space-x-8 text-white mt-4 font-bold md:text-2xl 
        hover:text-lime-600'>
          <li>
            <Link to='/'>
            Home
            </Link>
            </li>
            <li>
            <Link to='/menu'>
            Menu
            </Link>
            </li>
            <li>
            <Link to='/about'>
            About
            </Link>
            </li>
            <li>
            <Link to='/contact'>
            Contact
            </Link>
            </li>

        </ul>
      </div>
    </header>
  </div>



  <div className='absolute top-32 left-0 w-full text-center mt-16'>
    <h1 className=' text-4xl font-protest-riot text-green-400 mb-3'>Anis Restaurant</h1>
    <p class='text-white capitalize font-serif text-5xl mb-7'>
      Your Home For All Chicken Deals....!</p>
       <Link to="/menu">
      <button className='bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg
      font-protest-riot font-bold font-4xl py-3 px-5 underline'>
        Explore Our Menu</button>
      </Link>
  </div>
</div>



<div class='relative  md:hidden lg:hidden'>
  <img class='w-full ' src='https://cdn.pixabay.com/photo/2023/10/25/22/14/food-8341388_640.jpg' alt='Food Image' />

  <div class='absolute top-0 left-0 w-full  '>
    <header style={{ backgroundColor: headerColor }} className='border border-black 
    flex flex-row justify-around fixed top-0 z-10 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  text-5xl mb-3'>
        Anis</h1>
        <IoMenu onClick={toggleMenu} className='text-3xl text-white mt-4 space-x-5'/>
      
    </header>
    <div className='absolute top-14 left-0 w-full text-center mt-10'>
    <h1 className=' text-2xl font-protest-riot text-green-400  mb-3'>Anis Restaurant</h1>
    <p class='text-white capitalize font-serif text-xl mb-7'>
      Your Home For All Chicken Deals....!</p>
       <Link to="/menu">
      <button className=' bg-yellow-300 hover:bg-yellow-500 font-protest-riot font-bold font-4xl
       py-2 px-4 underline'>
        Explore Our Menu</button>
      </Link>
  </div>
  </div>
</div>
 
<nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden w-2/3  h-screen bg-lime-600 text-yellow-400 
        font-semibold flex justify-center text-lg uppercase cursor-pointer 
         rounded-lg fixed top-0 left-0 z-10 `}
      >
       


        <ul className='justify-center text-center pt-20 text-md'>
         
        <li className='py-2'>
  <Link to="/" onClick={closeMenu} className='hover:text-orange-700'>
    Home
  </Link>
</li>
<li className='py-3'>
  <Link to="/menu" onClick={closeMenu} className='hover:text-orange-700'>
    Menu
  </Link>
</li>
<li className='py-3'>
  <Link to="/about" onClick={closeMenu} className='hover:text-orange-700'>
    About
  </Link>
</li>
<li className='py-2'>
  <Link to="/contact" onClick={closeMenu} className='hover:text-orange-700'>
    Contact
  </Link>
</li>

        </ul>
         

      </nav>
  


     
            
          
          
        
    </div>
  )
}

export default Welcome