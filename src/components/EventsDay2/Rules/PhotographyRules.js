import photo1 from '../Posters/MOBILE PHOTOGRAPHY.jpg';
import photo2 from '../Posters/PHOTOGRAPHY.jpg';
const PhotographyRules = () => {
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
                  <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. Entry fee for Mobile is Rs.50 and for DSLR is Rs.100.</li>
                  <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. On spot themes will be given.</li>
                  <li className="py-3 text-left font-medium">3. Only .jpeg and .jpg formats are accepted.</li>
                  <li className="py-3 text-left font-medium">4. The content should be original and the photographer should own the copyrights of the image, Photographs found to be plagiarized will be disqualified.</li>
                  <li className="py-3 text-left font-medium">5. Editing used to create illusions, deceptions and/or manipulations, and the adding and removing of significant elements within the frame is prohibited.</li>
                  <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  <li className="py-3 text-left font-medium">7. Judging will be based on creativity, originality and in accordance to the theme.</li>

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
                  <li className="py-3 text-left">1.Hemanth - 9381897926</li>
                  <li className="py-3 text-left">2.Vijay Kumar - 9392496080</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={photo1} style={{width:'70%' , height:'70%'}} />
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={photo2} style={{width:'70%' , height:'70%'}} />
        
      </div>
      </section>
    );
};

export default PhotographyRules;