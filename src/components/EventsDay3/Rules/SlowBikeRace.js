import slowbikerace from '../Posters/SLOW BIKE RACE.jpg';
const SlowBikeRaceRules = () => {
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
 <li className="py-3 text-left font-medium">1.  Riders must ride a standard 2-wheel bike.</li>
                                    <li className="py-3 text-left font-medium">2. Riders must stay in their lane and cannot go backwards. </li>
                                    <li className="py-3 text-left font-medium">3. Riders cannot touch the ground with their feet </li>
                                    <li className="py-3 text-left font-medium">4. Any rider who goes backward, rides out of the lane or touches the ground is disqualified. </li>
                                    <li className="py-3 text-left font-medium">5.  Last one across the finish line wins, and  dvances to the next round .</li>
                                    <li className="py-3 text-left font-medium">6. Each rider is eligible to race a minimum of one round through consolation rounds.</li>
                                    <li className="py-3 text-left font-medium">7. In a round where no rider crosses the finish line, the last rider standing before disqualifying wins. </li>
                                    <li className="py-3 text-left font-medium">8. First Prize will be awarded to the Last Place Winner. </li>
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
                                    <li className="py-3 text-left font-medium">1. RAGAVAN-8667042835</li>
                                    <li className="py-3 text-left font-medium">2. GOKUL-8056565957</li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={slowbikerace} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default SlowBikeRaceRules;