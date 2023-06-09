import React, { useRef } from 'react';

// import about data
import { CelebrityData } from '../data';

const Workshop = () => {
  // destructure about
  const { image, title, subtitle } = CelebrityData;
  let myref = useRef();
  return (
    <section
      className='my-[30px] mt-[100px]'
      data-aos='fade-down'
      data-aos-offset='350'
      id="#About"
      ref={myref}
    >
      <div className='container mx-auto'>
        <div className='bg-gradient-to-r from-red-300 to-indigo-300 dark:bg-gradiet-to-r dark:from-red-500 dark:to-indigo-500 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1' data-aos='zoom-in-right'>
            <img src={image} alt='' />
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10 font-extrabold text-3xl' data-aos='fade-left' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0 font-semibold'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
            <a href="/workshop">
              <button disabled class="bg-violet-400  mt-10 text-white font-bold py-2 px-4 rounded-full">
                Register Closed
              </button>
            </a>
            <p className='pt-2 font-semibold'>Don't worry, To know more about Building a drone, Contact:</p>
            <h3 className='text-xl font-semibold text-orange-600'>Devarajan I- 887080847</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;