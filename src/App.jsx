import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './Index.css';
import Menu from './Components/Menu';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {

const [isVisible, setIsVisible]= useState(true)


useEffect(() => {
  const interval = setInterval(() => {
    setIsVisible(!isVisible);
  }, 5000); 

  return () => clearInterval(interval);
}, [isVisible]);



  return (
    <BrowserRouter>
      
       

       

        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      
        <div className='imageContainer flex mt-20 w-1/3 gap-2'>
      <img className={`image ${isVisible ? 'slide-in' : 'slide-out'}`} src='https://cdn.pixabay.com/photo/2020/06/08/10/03/rice-5273889_640.jpg' />
      <img className={`image ${isVisible ? 'slide-in' : 'slide-out'}`} src='https://cdn.pixabay.com/photo/2019/08/12/09/50/chicken-curry-4400848_640.jpg' />
      <img className={`image ${isVisible ? 'slide-in' : 'slide-out'}`} src='https://cdn.pixabay.com/photo/2019/07/17/06/22/tandoori-4343144_640.jpg' />
    </div>
       

          
        <div className='mb-20 mt-20  w-3/4  mx-auto md:flex flex-row md:justify-evenly'>
    <h1 className='text-6xl  font-protest-riot mb-5 md:mt-12 text-stone-800'>Our Services</h1>
    <div className=' w-full md:w-3/4'>
    <h2 className='Capitalize text-yellow-400 text-3xl  mb-4'>
      Catering Services</h2>
      <ul className='gap-3 font-bold border rounded-lg bg-yellow-600 text-xl'>
      <li className='py-7 px-5'>Weddings</li>
      <li className=' py-5 px-7'>Business Meetings</li>
      <li className='py-5 px-7'>Birthday Parties</li>
      <li className=' py-5 px-7'>Anniversaries</li>
      </ul>


    
    <div>
</div>
    </div>
   </div>



   <footer className='bg-stone-800 text-white'>
   <div className=' mt-20  w-3/4  mx-auto md:flex flex-row md:justify-between'>
    <h1 className=' text-4xl md:text-7xl  font-protest-riot mb-5 md:mt-12'>Anis</h1>
    <div className='md:w-1/2'>
    <h2 className='Capitalize text-white text-2xl font-bold mt-5 mb-4'>
      Your Home For All Chicken Deals..! </h2>
    <p className='text-white text-md mb-7'>
    Our vision is simple: to be the destination of choice for discerning diners 
    seeking exceptional food, impeccable service, and an inviting atmosphere.
     Whether you're celebrating a special occasion or simply craving a memorable meal, 
    we invite you to join us and experience the magic of Anis Restaurant
   <br/>

   

    </p>
    <div>
</div>
    </div>
   </div>


   </footer>
         

       
    </BrowserRouter>
  );
}

export default App;
