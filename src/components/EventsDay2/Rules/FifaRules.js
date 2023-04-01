import fifa from '../Posters/FIFA TOURNAMENT.jpg';
const FifaRules = () => {
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
                        <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹100</span> per Head.</li>
                  <li className="py-3 text-left font-medium">2. 1v1</li>
                  <li className="py-3 text-left font-medium">3. The match will be played on playstation. </li>
                  <li className="py-3 text-left font-medium">4. The Game will be FIFA23.</li>
                  <li className="py-3 text-left font-medium">5. Any club or national teams can be selected.</li>
                  <li className="py-3 text-left font-medium">6. The match duration will be informed on the day of tournament.</li>
                  <li className="py-3 text-left font-medium">7. Only Knockout stages. Normal kickoff &gt; Extra time &gt; penalty shootout</li>
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
          <div className='bg-gradient-to-l from-yellow-200 to-lime-200 rounded-[50px] min-h-[240px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-2xl text-violet-700 font-semibold">For queries: </li>
                  <li className="py-3 text-left font-medium">1.Vignesh S-8056604413</li>
                  <li className="py-3 text-left font-medium">2.Mohankarthikkeyan - 8098250501</li>

                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={fifa} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default FifaRules;