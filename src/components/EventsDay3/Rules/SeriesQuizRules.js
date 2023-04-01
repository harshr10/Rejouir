import series from '../Posters/SERIES QUIZ.jpg';
const SeriesQuizRules = () => {
    return (
        <section> <div>
        <section
          className='my-[10px] mt-[30px]'
          data-aos='fade-down'
          data-aos-offset='350'
          id="#About"
        >
          <div className='container mx-auto'>
            <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
              <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                            <ul className="list-outside py-3" data-aos='fade-left'>
                            <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹200</span> per Team.</li>
                  <li className="py-3 text-left font-medium">2. All teams can have maximum of 3 members & minimum 2 members.</li>
                  <li className="py-2 text-left font-medium">3. SERIES: <div class="grid pl-8 grid-rows-5 grid-flow-col gap-4"><div className='text-sm'>Game OF Thrones</div><div className='text-sm'>F.R.I.E.N.D.S</div><div className='text-sm'>Breaking Bad</div><div className='text-sm'>MCU Series: Loki & Wanda Vision</div></div></li>
                  <li className="pb-3 text-left font-medium">4. Consist of Four Rounds</li>
                  <li className="py-3 text-left font-medium">5. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  <li className="py-3 text-left font-medium">6. In any case No refund.</li>

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
                  <li className="py-3 text-left">1. GOKUL ANANDH- 8056681629</li>
                  <li className="py-3 text-left">2. SHARAN - 6385336659</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={series} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default SeriesQuizRules;