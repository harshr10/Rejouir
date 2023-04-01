import reels from '../Posters/REELS.jpg';
const ReelsRules = () => {
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
                <h1 className="text-lg text-left text-violet-700 py-3 text-xl font-bold"> Terms and Conditions: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹100</span> per Head.</li>
                  <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Only dialogue delivery allowed.</li>
                  <li className="py-3 text-left text-lg text-red-500 font-semibold ">3. Video must not exit 30 sec.</li>
                  <li className="py-3 text-left text-lg text-red-500 font-semibold ">4.	Music and Back Ground Music(BGM) are not allowed.</li>
                  <li className="py-3 text-left font-medium">5.	Dialogues should be in Tamil, Englih Or Hindi Only. </li>
                  <li className="py-3 text-left font-medium">6. Audio will we given at the spot , summit the video within 1 hr.</li>
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
                  <li className="py-3 text-left">1. Sivanan-7548860122</li>
                  <li className="py-3 text-left">2. Jayapreetha-9578543305</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={reels} style={{width:'70%' , height:'70%'}} />
      </div>

        </section>
    );
};

export default ReelsRules;