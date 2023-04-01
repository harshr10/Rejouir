import meme from '../Posters/MEMES MANIA.jpg';
const MemeManiaRules = () => {
    return (
        <section>
          <div>
              <section
                className='my-[10px] mt-[30px]'
                data-aos='fade-down'
                data-aos-offset='350'
                id="#About"
              >
                <div className='container mx-auto'>
                  <div className='bg-gradient-to-l from-red-200 to-indigo-200 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                    <div className='flex-1 xl:pr-12
                    '>
                      <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                      <ul className="list-outside py-3" data-aos='fade-left'>
                        <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.50 per head</li>
                        <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Individual Event.</li>
                        <li className="py-3 text-left font-medium">3. The language for the meme if used must be in English or Tamil.</li>
                        <li className="py-3 text-left font-medium">4. The theme of the competition will be allocated during the start of the event.</li>
                        <li className="py-3 text-left font-medium">5. The duration of the competition will be  30 minutes.</li>
                        <li className="py-3 text-left font-medium">6. Plagiarism is strictly not allowed.</li>
                        <li className="py-3 text-left font-medium">7. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
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
                        <li className="py-3 text-left text-2xl text-violet-700">For queries: </li>
                        <li className="py-3 text-left">1.Yogeshwar.B - 7349560888</li>
                        <li className="py-3 text-left">2.Sivapragash - 7397163264</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={meme} style={{width:'70%' , height:'70%'}} />
            </div>
        </section>
    );
};

export default MemeManiaRules;