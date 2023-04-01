import treasurehunt from '../Posters/TREASURE HUNT.jpg';
const TreasureHuntRules = () => {
    return (
        <section>
            <div>
                <section
                    className='my-[10px] mt-[30px]'
                    data-aos='fade-down'
                    data-aos-offset='350'
                    id="#About"
                >
                    <div className='container mx-auto'>
                        <div className='bg-gradient-to-l from-red-200 to-indigo-200 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                            <div className='flex-1 xl:pr-12'>
                                <h1 className="text-lg text-left text-violet-700 py-3 text-xl font-bold">Rules and Regulations:</h1>
                                <ul className="list-outside py-3" data-aos='fade-left'>
                                    <li className="py-3 text-left text-xl text-red-700 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹300</span> per Team.</li>
                                    <li className="py-3 text-left font-medium">2. All teams must have at least 3 members and not more than 4 members.</li>
                                    <li className="py-3 text-left font-medium">3. Teams must stay together during the Treasure Hunt and are encouraged to work together to solve the clues and retrieve the price from each location.</li>
                                    <li className="py-3 text-left font-medium">4. The game will be started in the auditorium. Each team in the hunt is assigned a number.</li>
                                    <li className="py-3 text-left font-medium">5. Each team will be given a "clue" at the beginning of the treasure hunt.It will be up to the teams to decipher the clues and safely acquire the clues from each of the locations.</li>
                                    <li className="py-3 text-left font-medium">6. Whether or not all clues are solved,the clues solved at the end of time limit must be returned to the auditorium to qualify for prices.</li>
                                    <li className="py-3 text-left font-medium">7. Teams will be scored on the total value of the clues collected within the given time.</li>
                                    <li className="py-3 text-left font-medium">8. Disqualification will result from any of the following
                                        <ul className='px-4'>
                                            <li>a. Include no team should try to search by motorbikes</li>
                                            <li>b. Damaging any property</li>
                                            <li>c. Interfering with other teams or their members in any way</li>
                                            <li>d. Copying from other teams.</li>
                                            <li>e. Stealing from other teams .</li></ul></li>
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
                                    <li className="py-3 text-left font-medium">1. CHANDRU - 9360080424</li>
                                    <li className="py-3 text-left font-medium">2. KARMUGILAN - 6384070596</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 mx-auto md:max-h-[60rem]'src={treasurehunt} style={{width:'70%' , height:'70%'}} />
            </div>

        </section>
    );
};

export default TreasureHuntRules;
