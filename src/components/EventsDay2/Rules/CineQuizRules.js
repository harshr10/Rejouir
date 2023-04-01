import cinequiz from '../Posters/CINE QUIZ.jpg';
const CineQuizRules = () => {
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
                                  <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹200</span> per Team.</li>
                                  <li className="py-3 text-left font-medium ">2. On spot fee registration also available.</li>
                                    <li className="py-3 text-left font-medium ">3. Only team entries are allowed to participate</li>
                                    <li className="py-3 text-left font-medium ">4. A team should consist of 3 or 4 persons</li>
                                    <li className="py-3 text-left font-medium ">5. Replacement of any participant will not be allowed after registration</li>
                                    <li className="py-3 text-left font-medium ">6. Answer should be delivered within the time allotted for each questions</li>
                                    <li className="py-3 text-left font-medium ">7. Any act of misbehaviour and giving clues to other teams will lead to disqualification</li>
                                    <li className="py-3 text-left font-medium ">8. Questions will not be asked more than twice </li>
                                    <li className="py-3 text-left font-medium ">9. Decision of the Judges will be final no further changes will be made </li>
                                    <li className="py-3 text-left font-medium ">9. Genre: Kollywood , DC & Marvel </li>
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
                                  <li className="py-3 text-left font-medium">1. JEEVAN - 6369064303</li>
                                  <li className="py-3 text-left font-medium">2. ARAVIND - 9976969800</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </section>
              <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={cinequiz} style={{width:'70%' , height:'70%'}}/>
          </div>
      </section>
  );
};

export default CineQuizRules;