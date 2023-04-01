import Solo_Singing from '../Posters/SOLO SINGING.jpg';
const SoloSingingRules = () => {
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
                                    <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹150</span> per head.</li>
                                    <li className="py-3 text-left font-medium ">2.	Spot fee registration can be done at the venue before one hour of commencement of programme.</li>
                                    <li className="py-3 text-left font-medium ">3.	Participants should appear on the first call to participate, no more call will be made.</li>
                                    <li className="py-3 text-left font-medium ">4.	Participants should submit the karaoke (if needed) while paying the registration fee.</li>
                                    <li className="py-3 text-left font-medium ">5.	No extra time shall be given for installing the karaoke it should be done prior to the event.</li>
                                    <li className="py-3 text-left font-medium ">6.	Participants will not be allowed to refer to the lyrics while singing.</li>
                                    <li className="py-3 text-left font-medium ">7.	Participants will be judged on the song selection, voice quality, clarity, rhythm and their appeal to the audience.</li>
                                    <li className="py-3 text-left font-medium ">8.	The participants should bring their own musical instruments if required in the performance.</li>
                                    <li className="py-3 text-left font-medium ">9.	Choice of song is open to the participants but the song should not have any slangs or derogatory language.</li>
                                    <li className="py-3 text-left font-medium ">10.	Decision of the judges will be final no further changes will be made.</li>
                                    <li className="py-3 text-left font-medium ">11. Duration - 3 minutes.</li>
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
                                    <li className="py-3 text-left font-medium">1. DEVENDIRAN.G - 9500830919</li>
                                    <li className="py-3 text-left font-medium">2. SATHISH - 8248194019</li>
                                    <li className="py-3 text-left font-medium">3. SHARMATHI - 9360232803</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={Solo_Singing} style={{width:'70%' , height:'70%'}}/>
            </div>
        </section>
    );
};

export default SoloSingingRules;