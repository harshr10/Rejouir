import bridge from '../Posters/BRIDGE PROTOTYPE.jpg';
const BridgePrototypeRules = () => {
    return (
        <section><div>
        <section
          className='my-[10px] mt-[30px]'
          data-aos='fade-down'
          data-aos-offset='350'
          id="#About"
        >
          <div className='container mx-auto'>
            <div className='bg-gradient-to-l from-red-200 to-indigo-200 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
                <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹250</span> per Team.</li>
                  <li className="py-3 text-left font-medium">2. All teams can have a minimum of 2 members and a maximum of 4 members.</li>
                  <li className="py-3 text-left font-medium">3. The participants will be provided with ice cream sticks, glue and other required materials.</li>
                  <li className="py-3 text-left font-medium">4. They must build a bridge using the given materials and within the time duration.</li>
                  <li className="py-3 text-left font-medium">5. The bridge must be able to hold a specific weight given by the co-ordinators.</li>
                  <li className="py-3 text-left font-medium">6. The bridge has to be made using 200 ice cream sticks and within 60 mins</li>
                  <li className="py-3 text-left font-medium">7. The bridge should span atleast 30 cm</li>
                  <li className="py-3 text-left font-medium">7. Any act of misbehaviour and malpractice will lead to disqualification.</li>
                  <li className="py-3 text-left font-medium">8. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
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
                  <li className="py-3 text-left font-medium">1. Mohithmuthu - 9150235038</li>
                  <li className="py-3 text-left font-medium">2. Kumar gaurav - 7352960767</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={bridge} style={{width:'70%' , height:'70%'}} />
      </div>

        </section>
    );
};

export default BridgePrototypeRules;