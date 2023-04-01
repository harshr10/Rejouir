import choreonight from '../Posters/GROUP DANCE.jpg';
const ChoreoNightRules = () => {
    return (
        <section>
            <div>
                <section
                    className='my-[10px] mt-[30px]'
                    data-aos='fade-down'
                    data-aos-offset='200'
                    id="#About"
                >
                    <div className='container mx-auto'>
                        <div className='bg-gradient-to-l from-red-200 to-indigo-200 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                            <div className='flex-1 xl:pr-12'>
                                <h1 className="text-lg text-left text-violet-700 py-3 text-xl font-bold">Rules and Regulations: </h1>
                                <ul className="list-outside py-3" data-aos='fade-left'>
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹100</span> per Head.</li>
                                    <li className="py-3 text-left font-medium">2. Each group should have at least 4 members and not more than 10 members.</li>
                                    <li className="py-3 text-left font-medium">3. After Registration, another google form will be shared via your mail soon,kindly</li>
                                    <li className="py-3 text-left font-medium">4. submit your performance's audio file in that google form.</li>
                                    <li className="py-3 text-left font-medium">5. Late participation is not allowed.</li>
                                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className='my-[10px] '
                    data-aos='fade-left'
                    data-aos-offset='200'
                    id="#About"
                >
                    <div className='container mx-auto'>
                        <div className='bg-gradient-to-l from-yellow-200 to-lime-200 rounded-[50px] min-h-[240px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                            <div className='flex-1 xl:pr-12'>
                                <ul className="list-outside py-3" data-aos='fade-left'>
                                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">For queries: </li>
                                    <li className="py-3 text-left font-medium">1. Ratchana-9486133831</li>
                                    <li className="py-3 text-left font-medium">2. Syscon Jose-7904696020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={choreonight} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
  };
  
  export default ChoreoNightRules;