import React from 'react';
import design from "../../src/assets/design.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';





const About = ({theme}) => {
  return (



    <div name='About' className= {theme? ' md:text-2xl  w-full min-h-screen  shadow-box-shadow bg-[#ffffff] text-[#000000] font-bold p-20  ' : ' md:text-2xl  w-full min-h-screen bg-[#0a192f] text-[#ccd6f6] p-20  '}>
      <div className='flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-8 rounded-3xl'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> About </p>
          </div>
          </AnimationOnScroll>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className='sm:text-right text-4xl '>
              <p className='text-xl sm:text-2xl md:text-4xl'>Hi. I'm Sal, nice to meet you. Please take a look around.</p>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div>
            <AnimationOnScroll animateIn="animate__tada">
               <img src={design} alt='' className='h-13'/>
               </AnimationOnScroll>
              <p className='leading-relaxed text-sm md:text-xl'>Hello World! This is Savero Dalta currently a Student at SMKN 1 Boyolangu. I have a planning towards the future of me, which to marry one of the JKT48 Member. My backup plan is to marry - Kathrina.</p>  
            </div>
            </AnimationOnScroll>
          </div>
      </div>
    </div>
   
  );
};

export default About;