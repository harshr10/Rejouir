import React, { useRef } from 'react';

// import about data
import { CelebrityData } from '../data';
import actor from '../assets/img/REJOUIR INVITE POSTER.jpg';

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
      <div className='container mx-auto text-center'>
      <div class="w-100 mx-auto text-center md:w-10/15">
            <div class="relative z-0 w-full mt-2">
              <div class="relative h-auto max-w-xl mx-auto ">

                <div data-aos='fade-up' data-aos-delay='800'>
                  <img alt="" src={actor}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Workshop;