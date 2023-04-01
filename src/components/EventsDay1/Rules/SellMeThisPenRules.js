import sellmethispen from '../Posters/SELL THE PEN.jpg';
const SellMeThisPenRules = () => {
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
                                    <li className="py-3 text-left font-medium ">2. The participant is given a commodity to sell and has to convince the Customer (read, judges) to buy it.</li>
                                    <li className="py-3 text-left font-medium ">3. The participant needs to develop a unique set of Stories/properties for said commodities, and clarify the doubts of the judges to ensure that the deal is done.</li>
                                    <li className="py-3 text-left font-medium ">4. Participants will be judged based on their content, language and argumentation skills.</li>
                                    <li className="py-3 text-left font-medium ">5. The participant will have preparation time is of 3 minutes and 5 minutes to sell the commodity.</li>
                                    <li className="py-3 text-left font-medium ">6. The decision of the judge will be the final call.</li>
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
                                    <li className="py-3 text-left font-medium">1. Arunachalam-9384239553</li>
                                    <li className="py-3 text-left font-medium">2. Akash-7620671046</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={sellmethispen} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default SellMeThisPenRules;