import rampwalk from '../Posters/RAMP WALK.jpg';
const RampWalkRules = () => {
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
                                  <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹250</span> per Head.</li>
                                  <li className="py-3 text-left font-medium">2. Single Person or Group Entry allowed.</li>
                                  <li className="py-3 text-left font-medium">3. Maximum members in a group should not exceed 5 members.</li>
                                  <li className="py-3 text-left font-medium">4. Competition is open to all the students.(both boys and girls).</li>
                                  <li className="py-3 text-left font-medium">5. Time limit for each participant is 5 minutes( including Setup and performance).</li>
                                  <li className="py-3 text-left font-medium">6. The Theme for ramp walk is based on "The Four elements of Nature"(air, water, wind and fire).</li>
                                  <li className="py-3 text-left font-medium">7. Should carry their tracks in pen drive and should be submitted in advance.</li>
                                  <li className="py-3 text-left font-medium">8. Announcement will be done maximum twice, failing to arrive will be disqualified.</li>
                                  <li className="py-3 text-left font-medium">9. Judge’s decision shall be final and abiding.</li>
                                  <li className="py-3 text-left font-medium">10. Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the participant from the contest.</li>
                                  <li className="py-3 text-left font-medium">11. Participants will be judged on costumes, theme, walking stance, attitude and tagline.</li>
                                  <li className="py-3 text-left font-medium">12. All costumes are permitted, which maintain decency including original costumes & fashion designs.</li>
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
                                  <li className="py-3 text-left font-medium">1. Murugesh S - 9360778486</li>
                                  <li className="py-3 text-left font-medium">2. Sai Eshwar - 9600348487</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </section>
              <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={rampwalk} style={{width:'70%' , height:'70%'}}/>
          </div>
      </section>
  );
};

export default RampWalkRules;