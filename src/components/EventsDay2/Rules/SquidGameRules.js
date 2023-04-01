import squidgame from '../Posters/SQUID GAME.jpg';
const SquidGameRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹70</span> per Head.</li>
                                    <li className="py-3 text-left font-medium ">2. Any number of entries per persons is allowed.</li>
                                    <li className="py-3 text-left font-medium ">3. Performance of the participants will be judged on the basis of errors detected.</li>
                                    <li className="py-3 text-left font-medium ">4. Act of doing illegal activities during the event will lead to disqualification.</li>
                                    <li className="py-3 text-left font-medium ">5. Event consist of three rounds.</li>
                                    <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4">
                            <div className='text-sm'>1. First round - 4 mins</div>
                            <div className='text-sm'>2. Second round   - 8 mins</div>
                            <div className='text-sm'>3. Third round ­- 12 mins</div>
                          </div>
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
                                    <li className="py-3 text-left font-medium">1. Balaji R - 8681038799</li>
                                    <li className="py-3 text-left font-medium">2. Sanjay Kumar K - 7339697113</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={squidgame} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default SquidGameRules;