import pushup from '../Posters/PUSHUP CONTEST.jpg';
const PushUpRules = () => {
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
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹100</span> per Head.</li>
                  <li className="py-3 text-left font-medium">2. Get down on all fours, placing your hands slightly wider than your shoulders.</li>
                  <li className="py-3 text-left font-medium">3. Straighten your arms and legs.</li>
                  <li className="py-3 text-left font-medium">4. Lower your body until your chest nearly touches the floor.</li>
                  <li className="py-3 text-left font-medium">5. Pause, then push yourself back up. Repeat.</li>
                  <li className="py-3 text-left font-medium">6. Only clear reps will be counted
                  </li>
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
                  <li className="py-3 text-left">1.Divian G-9487144119</li>
                  <li className="py-3 text-left">2.Vetrivel-8825623830</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={pushup} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default PushUpRules;