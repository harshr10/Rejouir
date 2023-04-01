import debate from '../Posters/DEBATE.jpg';
const DebateRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹400</span> per Team.</li>
                                    <li className="py-3 text-left font-medium">2. 6-10 members in a team</li>
                                    <li className="py-3 text-left font-medium">3. Preparation time – 3 minutes</li>
                                    <li className="py-3 text-left font-medium">4. Total two rounds:
                                    <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4">
                                    <div className='text-sm'>1st  Round :
                                    The first round will be in a zig-zag fashion where, the participants will debate against the points put forth by the opposite team mate who spoke before them within the stipulated time frame.</div>
                                    <div className='text-sm'>2nd  Round:
                                    This is an open round, where participants can debate against any one / any point put forth by the opposite team mate within the stipulate time frame. Participants will be judged based on their content, language and argumentation skills</div>
                                    </div></li>
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
                                    <li className="py-3 text-left font-medium">1. Raj Pradeep – 7540025596</li>
                                    <li className="py-3 text-left font-medium">2. Abina T – 8304946068</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={debate} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default DebateRules;