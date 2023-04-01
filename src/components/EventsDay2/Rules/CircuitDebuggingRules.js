import circuitdubugging from '../Posters/CIRCUIT DEBUGGING.jpg';
const CircuitDebuggingRules = () => {
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
                  <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                    <div className='flex-1 xl:pr-12'>
                      <h1 className="text-lg text-left py-3 font-medium"> Terms and Conditions: </h1>
                      <ul className="list-outside py-3" data-aos='fade-left'>
                      <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹150</span> per Team.</li>
                        <li className="py-3 text-left font-medium">2. A team may consist of a maximum of THREE members.</li>
                        <li className="py-3 text-left font-medium">3. The event has THREE  rounds, which test your circuit debugging skills.</li>
                        <li className="py-3 text-left font-medium">4. PREREQUISITE: Basics of analog and digital Electronics, Op-amp, IC555, Multisim simulator.</li>
                        <li className="py-3 text-left font-medium">5. Usage of mobile phones and internet will be strictly prohibited.</li>
                        <li className="py-3 text-left font-medium">6. Rounds:
                          <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4">
                            <div className='text-sm'>1. General Quiz</div>
                            <div className='text-sm'>2. Buzzer Round</div>
                            <div className='text-sm'>3. Using Multisim Simulator</div>
                          </div>
                        </li>
                        <li className="py-3 text-left font-medium">7. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
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
                  <div className='bg-yellow-100 rounded-[50px] min-h-[240px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                    <div className='flex-1 xl:pr-12'>
                      <ul className="list-outside py-3" data-aos='fade-left'>
                        <li className="py-3 text-left text-2xl text-violet-700 font-semibold">For queries: </li>
                        <li className="py-3 text-left font-medium">1.Sangesh - 8870073053</li>
                        <li className="py-3 text-left font-medium">2.Madesh Varadhan - 7499225514</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={circuitdubugging} style={{width:'70%' , height:'70%'}} />
            </div>
            </section>
    );
};

export default CircuitDebuggingRules;