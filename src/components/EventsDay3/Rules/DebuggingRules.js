import debug from '../Posters/DEBUGGING.jpg';
const DebuggingRules = () => {
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
                                <li className="py-3 text-left font-medium">2. Participants should complete the task within the allotted time.</li>
                                <li className="py-3 text-left font-medium">3. Participants are not allowed to get help from others</li>
                                <li className="py-3 text-left font-medium">4. Act of using internet, mobile phones during the event will lead to disqualification</li>
                                <li className="py-3 text-left font-medium">5. Three rounds will be conducted .</li>
                                <li className="py-3 text-left font-medium">Programming Language For Each Round: 
                                <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4">
                                    <div className='text-sm'>1. C </div>
                                    <div className='text-sm'>2. Java</div>
                                    <div className='text-sm'>3. Java Adanvced</div>
                                    </div>
                                    </li>
                                <li className="py-3 text-left font-medium">6. Performance of the participants will be judged on the basis of errors detected and corrected</li>
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
                                <li className="py-3 text-left text-2xl text-violet-700 font-semibold">For queries: </li>
                                <li className="py-3 text-left">1.Bharath Shankar-8667019656</li>
                                <li className="py-3 text-left">2.Kabilan -7010935156</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={debug} style={{width:'70%' , height:'70%'}} />
        </div>
        </section>
    );
};

export default DebuggingRules;