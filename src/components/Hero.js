import React from 'react';
// import hero data
import RejouirDate from '../assets/img/Rejouir Date.jpg';
import { heroData } from '../data';

const Hero = () => {
  // destructure hero
  // bg-gradient-to-r from-green-400 to-blue-500
  // bg-gradient-to-r from-cyan-200 to-blue-200
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section class="pt-10 pb-20" style={{ backgroundImage: '${}' }}>
      <div data-aos='fade-down' data-aos-delay='400'>
        <div class="px-12 mx-auto max-w-5xl">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-red-400 md:text-6xl md:tracking-tight">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-indigo-700 to-red-400 inline">{title}
              </span>
              <span class="text-red-400 inline"> | </span>
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-red-400 to-indigo-700 inline">{subtitle}
              </span>
            </h1>
            <h1 className='my-10 text-2xl font-black leading-none tracking-normal text-slate-800 md:text-4xl md:tracking-tight'><span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-red-400 to-blue-400 lg:inline">16 , 17 & 18 March </span></h1>
            {/* <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              
            </p> */}
            <div class="mb-0 space-x-0 md:space-x-2 md:mb-8">

            </div>

          </div>
          <br />
          <div class="w-100 mx-auto text-center md:w-10/12">
            <div class="relative z-0 w-full mt-2">
              <div class="relative overflow-hidden shadow-2xl">

                <div data-aos='fade-up' data-aos-delay='800'>
                  <img alt="" src={RejouirDate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
export default Hero;