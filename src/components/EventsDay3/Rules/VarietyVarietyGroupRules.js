import VVG from '../Posters/variety variety group.jpg';
const VarietyVarietyGroup = () => {
    return (
        <section><div>
        <section
          className='my-[10px] mt-[30px]'
          data-aos='fade-down'
          data-aos-offset='350'
          id="#About"
        >
          <div className='container mx-auto'>
            <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
              <div className='flex-1 xl:pr-12'>
                <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹100</span> per Head.</li>
                  <li className="py-3 text-left font-medium">2. 1.	Same performance should not be repeated in any other events.</li>
                  <li className="py-3 text-left font-medium">2.	The theme is open but not should be abusive any political issiue or hurt any religion view</li>
                  <li className="py-3 text-left font-medium">3.	Group should minimum 4 & maximum 8 members</li>
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
                  <li className="py-3 text-left text-2xl text-violet-700">For queries: </li>
                  <li className="py-3 text-left font-medium">1. Periairusappan - 9600896231</li>
                  <li className="py-3 text-left font-medium">2.Dinakaran - 7010935156</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={VVG} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default VarietyVarietyGroup;