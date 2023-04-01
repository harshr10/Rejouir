import mehndi from '../Posters/MEHANDI.jpg';
const MehndiRules = () => {
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
                                    <li className="py-3 text-left font-medium">2. No of participants: 2 members per team.</li>
                                    <li className="py-3 text-left font-medium">3. Participants are advised to carry their own material.</li>
                                    <li className="py-3 text-left font-medium">4.Time Limit: 30 mins.</li>
                                    <li className="py-3 text-left font-medium">5. Participants can apply mehndi on their own hand or in their teammate's hand.</li>
                                    <li className="py-3 text-left font-medium">6. Participants will not be allowed to refer any printed material or phone.</li>
                                    <li className="py-3 text-left font-medium">7. The mehndi design should be portrayed in one hand till elbow.</li>
                                    <li className="py-3 text-left font-medium">8. Participants should use only normal mehndi and no extra colours. </li>
                                    <li className="py-3 text-left font-medium">9. Use of stickers/tattoos are not appreciated.</li>
                                    <li className="py-3 text-left font-medium">10. Decision of the judges will be final in all aspects.</li>
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
                                    <li className="py-3 text-left font-medium">1. Vishnu Kumar-8825827011</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={mehndi} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default MehndiRules;