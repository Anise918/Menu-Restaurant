import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { IoMenu } from "react-icons/io5";





const About = () => {

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
    <div>
    <div class='relative hidden  sm:hiddden md:block lg:block'>
  <img class='w-full ' src=' https://cdn.pixabay.com/photo/2017/02/15/09/16/ramen-2068052_640.jpg ' />

  <div class=' absolute top-0 left-0 w-full  '>
    <header style={{ backgroundColor: headerColor }} className='border border-black
     flex  justify-around fixed z-10 top-0 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  md:text-6xl lg:text-7xl 
        mb-4'>Anis</h1>
       
      <div>
        <ul className='md:text-2xl hover:text-lime-600 flex justify-center space-x-8 text-white mt-7 font-bold'>
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
    <h1 className=' text-4xl font-protest-riot text-green-400 mb-3'>About Us</h1>
    <p class='text-white capitalize font-serif text-6xl mb-7'>
    Elevated Dining <span className='text-yellow-500 font-protest-riot'>Experience</span>
       </p>
       
  </div>
</div>



<div class='relative  md:hidden lg:hidden '>
  <img class='w-full ' src=' https://cdn.pixabay.com/photo/2017/02/15/09/16/ramen-2068052_640.jpg ' />

  <div class='absolute top-0 left-0 w-full  '>
    <header style={{ backgroundColor: headerColor }}  className=' flex flex-row items-center
      justify-around border border-black fixed z-10 top-0 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  text-5xl mb-3 mt-4'>
        Anis</h1>
        <IoMenu onClick={toggleMenu}  className='text-3xl text-white mt-4' />
    
      
    </header>
    <div className='absolute top-14 left-0 w-full text-center mt-10'>
    <h1 className='  font-protest-riot text-green-400 text-3xl mb-3'>
      About us
    </h1>
    <p class='text-white capitalize font-serif text-3xl mb-7'>
      Elevated Dining<span className='font-protest-riot text-yellow-400 '>Experience</span></p>
      
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
       


   <div className='mb-20 mt-20 f  w-3/4  mx-auto md:flex flex-row md:justify-evenly'>
    <h1 className='text-7xl  font-protest-riot mb-5 md:mt-12'>About Us</h1>
    <div className='md:w-1/2'>
    <h2 className='Capitalize text-yellow-400 text-3xl  mb-4'>
      Would you love to see culinary masterpiece?</h2>
    <p className='font-light text-xl'>
    <span className='text-green-500 font-semibold font-2xl'>At Anis Restaurant,</span> we believe that dining is not just about food, 
    but about creating memorable experiences. Our story began with a passion for
     culinary excellence and a commitment 
    to providing exceptional hospitality to our guests.
    <br className='mt-3'/>

    Led by our team of talented chefs, we take pride in sourcing the finest ingredients 
    locally and globally to create dishes that are both innovative and delicious. 
    From traditional classics to contemporary creations, each dish is crafted 
    with care and precision to tantalize your taste buds and leave you craving more.
    </p>

    <h3 className='font-bold mt-7 '>We are open Mon-Fri from 8.00 A.M to 8.00P.M</h3>
    <div>
</div>
    </div>
   </div>


    </div>
  )
}

export default About