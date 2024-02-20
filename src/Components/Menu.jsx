import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoMenu } from "react-icons/io5";

const Menu = () => {
 const [menuData, setMenuData]=useState([])
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [headerColor, setHeaderColor] =useState('transparent')
 const [isLoading, setIsLoading] =useState(false)
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

 

  useEffect(() => {
    const listenScrollEvent = () => {
      
      setHeaderColor(window.scrollY > 30 ? "black" : "transparent");
    
    };
  
    window.addEventListener("scroll", listenScrollEvent);
  
    
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [headerColor]); 
  
  




 useEffect(() => {
  const limit=100
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(response => response.json())
    .then(data => setMenuData(data.meals)) 
    
    .catch(err => console.log(err))
}, []);



  return (
    <div className=''>
        

        <div class='relative hidden  sm:hiddden md:block lg:block'>
  <img class='w-full ' src=' https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_640.jpg ' />

  <div class=' absolute top-0 left-0 w-full  '>
    <header style={{ backgroundColor: headerColor }} className='border border-black
     flex  justify-around fixed z-10 top-0 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  md:text-6xl lg:text-7xl 
        mb-4'>Anis</h1>
       
      <div>
        <ul className=' flex justify-center space-x-8 md:text-2xl hover:text-amber-400
         text-white mt-7 font-bold'>
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
    <h1 className=' text-4xl font-protest-riot text-green-400 mb-3'>Our Menu</h1>
    <p class='text-white capitalize font-serif text-6xl mb-7'>
      Take a look at our<span className='text-yellow-500 font-protest-riot'> Delicacies </span></p>
       
  </div>
</div>



<div class='relative  md:hidden lg:hidden'>
  <img class='w-full ' src=' https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_640.jpg ' />

  <div class='absolute top-0 left-0 w-full  '>
    <header style={{ backgroundColor: headerColor }}  className=' flex flex-row
     items-center
      justify-around border border-black fixed  z-10 top-0 w-full'>
      <h1 className='text-yellow-400 font-protest-riot  text-5xl mb-3 mt-4'>
        Anis</h1>
        <IoMenu onClick={toggleMenu} className='text-3xl text-white mt-4 fixed top-0 z-10 left-0'/>
    
      
    </header>
    <div className='absolute top-14 left-0 w-full text-center mt-10'>
    <h1 className='  font-protest-riot text-green-400 text-3xl mb-3'>Our Menu</h1>
    <p class='text-white capitalize font-serif text-3xl mb-7'>
      Take a look at our <span className='font-protest-riot text-yellow-400 '>Delicacies</span></p>
      
  </div>
  </div>
</div>
 
<nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden w-1/2  h-1/2 bg-lime-600 text-yellow-400 
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
       
    <div className=' mt-20 mb-20 w-3/4 mx-auto md:flex flex-row md:justify-around'>
    <h1 className='mb-30 text-8xl font-protest-riot'>Menu</h1>
    <div className='md:w-1/2'>
    <h3 className='text-4xl capitalize text-yellow-500'>Do you love Kuku?</h3>
    <p className='font-light text-xl'> Take a look at our delicacies, ranging from soups, deep fried, shallow fried, grilled 
    
    and all types of mouth-savouring chicken prepared by our professional chefs who take pride in serving
    distinguished guests. </p>
    </div>

    </div>
  
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-30'>
      {menuData ? (
  menuData.map(menuItem => (
    <div className='img-container' key={menuItem.idMeal}>
      <img src={menuItem.strMealThumb} alt={menuItem.strMeal} 
      loading='lazy'
      className='border rounded-lg mb-5 w-full hover:scale-105 transition-transform duration-300' />
      <h2 className='font-bold text-xl mb-3'>{menuItem.strMeal}</h2>
    </div>
     
  ))
) : (
  <p>Loading...</p>
)}



      </div>
     
    </div>
  );
};

export default Menu;

