import lip from '../Posters/LIP SYNC.jpg';
const LipSyncRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹50</span> per Head.</li>
                                    <li className="py-3 text-left font-medium ">2. Each Team consists of 4 members and should be registered as a single team.</li>
                                    <li className="py-3 text-left font-medium ">3. The Game will be played in pairs, so the team will be divided into two pairs.</li>
                                    <li className="py-3 text-left font-medium ">4. Noise Cancelling Headphones will be provided by the organizers.</li>
                                    <li className="py-3 text-left font-medium ">5. There will be multiple rounds to select the winners of the event</li>
                                    <li className="py-3 text-left font-medium ">6. In every round, the participants will be expected to guess various words, phrases and song lyrics(opening lines) with noise cancelling headphones.</li>
                                    <li className="py-3 text-left font-medium ">7. If participants are found removing the headphones intentionally during the events, they will be disqualified.</li>
                                    <li className="py-3 text-left font-medium ">8. If the headphones accidently come off, the point will be replayed.</li>
                                    <li className="py-3 text-left font-medium ">9. Points awarded and decisions taken by the organizer are final and binding. No room for contest will be allowed.</li>
                                    <li className="py-3 text-left font-medium ">10. The Songs in the song lyrics will be popular 2010s Kollywood songs.</li>
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
                                    <li className="py-3 text-left font-medium">1. Selva Bharathy R - 7639704745</li>
                                    <li className="py-3 text-left font-medium">2. Janaarthanan G - 63801547727</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={lip} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default LipSyncRules;