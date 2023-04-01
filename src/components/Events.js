
import React from 'react';

import { Link } from 'react-router-dom';

// import features data
import { DayWiseEvents } from '../data';

// import icons
import { BsArrowRight } from 'react-icons/bs';

const Events = () => {
  // destructure features data
  const { title, subtitle, list } = DayWiseEvents;
  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          <h1
            className='mb-6 xl:mb-12 font-bold text-4xl text-indigo-700 dark:text-white'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            EVENTS LIST
          </h1>

          <h1
            className='mb-6 xl:mb-8 font-bold text-2xl dark:text-white'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            <p className='text-emerald-500 font-semibold text-3xl pb-10 py-3 dark:text-blue-200'>Registrations Open!!!</p>
            {title}
          </h1>
        </div>
        {/* feature list */}
        <div className='flex flex-wrap justify-center'>
          {list.map((feature, index) => {
            // destructure feature
            const { image, bgImage, title, url, description, linkText, delay } =
              feature;
            const reqtitle = title.replace(' ', '-');
            var loc = encodeURIComponent(url) + reqtitle;
            // feature item
            return (
              <div
                key={index}
                className='max-w-[390px] h-[358px] md:mx-8 flex flex-col items-center justify-center xl:flex-row xl:justify-start'
                data-aos='zoom-in'
                data-aos-offset='100'
                data-aos-delay={delay}
              >
                {/* bg image */}
                <div className='flex py-8 md:py-10 sm:p-8 -z-10 bg-gradient-to-r from-red-300 to-indigo-200 rounded-[50px]'>
                  {/* icon image */}
                  <div
                    className='max-w-[120px] xl:mr-7 xl:max-w-[232px]'
                    data-aos='zoom-in-right'
                    data-aos-delay={delay}
                  >
                    <img class="pt-8" src={image} />
                  </div>
                  {/* text */}
                  <div className='max-w-[220px] pt-10 pb-8'>
                    <h3 className='h3 font-bold mb-4 text-primary dark:text-sky-500' >{title}</h3>
                    <p className='font-bold italic mb-4 text-indigo-600 dark:text-indigo-500'>{description}</p>
                    {/* link & arrow */}
                    <Link to={`/${loc}`} >
                      <div className='flex items-center gap-x-2 group'>
                        <a className='text-primary font-bold dark:text-sky-500'>
                          {linkText}
                        </a>
                        <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
                      </div>
                    </Link>
                  </div>
                </div>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;