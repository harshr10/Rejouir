import shortfilm from '../Posters/SHORT FILM.jpg';
const ShortFilmRules = () => {
    return (
        <section><div>
        <section
          className='my-[10px] mt-[30px]'
          data-aos='fade-down'
          data-aos-offset='350'
          id="#About"
        >
          <div className='container mx-auto'>
            <div className='bg-gradient-to-l from-red-200 to-indigo-200 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
                <h1 className="text-lg text-left text-violet-700 py-3 text-xl font-bold">Rules and Regulations: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹600</span> per Team.</li>
                  <li className="py-3 text-left font-medium">2. The running time should be less than 10 min (may add up to an additional 10 sec)</li>
                  <li className="py-3 text-left font-medium">3. Film may be in any language or have no dialogue at all.</li>
                  <li className="py-3 text-left font-medium">4. Non-English audio must have English subtitles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className='my-[10px] '
          data-aos='fade-left'
          data-aos-offset='350'
          id="#About"
        >
          <div className='container mx-auto'>
            <div className='bg-yellow-100 rounded-[50px] min-h-[240px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
                <ul className="list-outside py-3" data-aos='fade-left'>
                  <li className="py-3 text-left text-2xl text-violet-700">For queries: </li>
                  <li className="py-3 text-left">1. BALAJI-8825493613</li>
                  <li className="py-3 text-left">2. KISHANTH-6382225047</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={shortfilm} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default ShortFilmRules;