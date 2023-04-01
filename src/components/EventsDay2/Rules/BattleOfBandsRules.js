import battleofbands from '../Posters/BATTLE OF BANDS.jpg';
const BattleOfBandsRules = () => {
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
                                  <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹800</span> per Team.</li>
                                  <li className="py-3 text-left font-medium">2. Team size - Minimum 3 team members, maximum 8 team members.</li>
                                  <li className="py-3 text-left font-medium">3. Instrumentalists - Maximum of 7 instrumentalists are allowed.</li>
                                  <li className="py-3 text-left font-medium">4. Instruments - The participants must bring their own instruments.</li>
                                  <li className="py-3 text-left font-medium">5. Only Main out cables and Drums will be offered to the band's instrumentalists. Bands must bring their own processor cable if necessary.</li>
                                  <li className="py-3 text-left font-medium">6. Participants must arrive promptly for their assigned session. Participants that arrive too late will not be able to compete.</li>
                                  <li className="py-3 text-left font-medium">7. Any disputes or conflicts will result in immediate disqualification since the judge's judgment will be final.</li>
                                  <li className="py-3 text-left font-medium">8. On stage, no insults should be directed at the judges or the audience.</li>
                                  <li className="py-3 text-left font-medium">9. The management will not be held accountable for any broken equipment, injuries, or any other negative occurrences outside of our staff’s control.</li>
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
                                  <li className="py-3 text-left font-medium">1. HARSH R - 9486827765</li>
                                  <li className="py-3 text-left font-medium">2. BALAKUMARAN P - 6382474871</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </section>
              <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={battleofbands} style={{width:'70%' , height:'70%'}}/>
          </div>
      </section>
  );
};

export default BattleOfBandsRules;