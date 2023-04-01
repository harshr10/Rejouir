import valo from '../Posters/VALORANT.jpg';
const ValorantRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The entry fee is <span className='text-bold text-red-600 text-2xl'>₹200</span> per Team.</li>
                                    <li className="py-3 text-left font-medium">2. Each Team consists of 5 members and there will be a Squad Leader.</li>
                                    <li className="py-3 text-left font-medium">3. The Squad leader will register the names of all the team members and will be contacted if any need arises.</li>
                                    <li className="py-3 text-left font-medium">4. The Communication will be mostly between the organizers and Squad Leader except during a briefing which will be conducted before the event commences.</li>
                                    <li className="py-3 text-left font-medium">5. Toxicity is prohibited between teams through chat or voice.</li>
                                    <li className="py-3 text-left font-medium">6. If any instances of verbal abuse or sabotage is found or reported to the organizer, the team may receive a first and final warning or disqualified immediately however the circumstances demand.</li>
                                    <li className="py-3 text-left font-medium">7. Detailed Instructions and Schedules will be announced in a discord server which will become available to teams as they start register for the event.</li>
                                    <li className="py-3 text-left font-medium">8. Detailed Instructions: <a href="https://discord.com/invite/722RjzVr"className="font-bold text-red-600">Discord Link</a> </li>
                                    <li className="py-3 text-left font-medium">9. Event Mode - <span className="font-bold text-red-600">Online</span></li>
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
                                    <li className="py-3 text-left font-medium">1. NAVIN S- 8825844108  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={valo} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default ValorantRules;