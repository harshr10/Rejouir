import extempore from '../Posters/EXTEMPORE.jpg'
const ExtemporeRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹50</span> per head.</li>
                                    <li className="py-3 text-left font-medium ">2. The topic for the speech will be given on the spot.</li>
                                    <li className="py-3 text-left font-medium ">3. The participant must give a 3 minute speech on the given topic using the content prepared during the preparation time.</li>
                                    <li className="py-3 text-left font-medium ">4. Participants will have 1 minute to prepare.</li>
                                    <li className="py-3 text-left font-medium ">5. Language used shall be strictly English.</li>
                                    <li className="py-3 text-left font-medium ">6. The speaker will be evaluated based on their confidence, knowledge on topic, oratorical skills, fluency, creativity, clarity of speech and presence of mind.</li>
                                    <li className="py-3 text-left font-medium ">7. If the speaker exceeds the time limit, marks will be deducted.</li>
                                    <li className="py-3 text-left font-medium ">8. The judges decision will be final and no objections will be entertained.</li>
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
                                    <li className="py-3 text-left font-medium">1. Supriya Varshini - 9443639681</li>
                                    <li className="py-3 text-left font-medium">1. Sanjevi - 8072042654</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={extempore} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default ExtemporeRules;