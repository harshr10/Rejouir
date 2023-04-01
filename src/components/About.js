import React, { useRef } from 'react';

// import about data
import { aboutData } from '../data';

const About = () => {
  // destructure about
  const { image, title, qoute, subtitle } = aboutData;

  return (
    <section
      className='my-[30px] mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='300'
      id="#About"

    >
      <div className='container mx-auto'>
        <div className='bg-gradient-to-r from-indigo-300 to-red-300 dark:bg-gradiet-to-r dark:from-indigo-500 dark:to-red-500 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1' data-aos='zoom-in-left'>
            <img className="border-white" src={image} alt='' />
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-7 text-slate-900 dark:text-pink-100 text-3xl font-extrabold' data-aos='fade-left' data-aos-delay='200'>
              {title}
            </h2>
            <p
              className='max-w-[474px] text-base text-slate-900 dark:text-pink-100 text-left mx-auto xl:mx-0 font-semi-bold'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <p className='font-extrabold text-violet-600 dark:text-violet-300 mb-3 text-xl'> <i>{qoute}</i></p>
              <span className='text-sky-600 dark:text-sky-300 font-extrabold text-xl'>"RÉJOUIR 2K23"</span> Puducherry Technological University (PTU)'s cultural and literary extravaganza , is organised by the student council to promote the spirit of competition amongst the college youth.'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;