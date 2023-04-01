import ipl from '../Posters/IPL AUCTION.jpg';
const IplAuctionRules = () => {
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
                                    <li className="py-3 text-left font-medium">2. Each team should consist of 3 to 4 members. </li>
                                    <li className="py-3 text-left font-medium">3. There will be two rounds </li>
                                    <li className="py-3 text-left font-medium">4. Prelims (General cricket quiz) and</li>
                                    <li className="py-3 text-left font-medium">5. Mains (The teams that qualify prelims will play mains).</li>
                                    <li className="py-3 text-left font-medium">6. Prelims consist of 25 general questions (Cricket quiz).</li>
                                    <li className="py-3 text-left font-medium">Mains:
                                    <div className='text-sm'>Total of 8 teams will selected according to prelims mark.</div>
                                    <div className='text-sm'>The teams which qualify for mains will be given 80 crores amount and each team should buy 11 players + 1 mentor (totally 12 players).</div>
                                    <div className='text-sm'>The team should consist of:( Maximum 4 foreign players )</div>
                                    <div className='text-sm'>3 to 5 Batsman</div>
                                    <div className='text-sm'>1 Wicketkeeper</div>
                                    <div className='text-sm'>1 to 3 All  Rounders</div>
                                    <div className='text-sm'>3 to 5 Bowlers</div>
                                    <div className='text-sm'>1 Mentor ( either Indian or foreign player )</div>
                                    </li>
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
                                    <li className="py-3 text-left font-medium">1. SHariraam.D-8072486875</li>
                                    <li className="py-3 text-left font-medium">2. Karthikeyan.M-9488274966</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={ipl} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default IplAuctionRules;