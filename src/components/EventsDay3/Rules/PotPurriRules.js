import pot from '../Posters/POT pourri.jpg';
const PotPurriRules = () => {
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
                  <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹50</span> per Head.</li>
                  <li className="py-3 text-left font-medium">2. CATCHPHRASE: One member of a team tries to get his or her team to guess the displayed word or phrase. A clue-giver can make any physical gesture, and can give almost any verbal clue, but may not say a word that rhymes with any of the words, give the first letter of a word, say the number of syllables, or say part of any word in the clue.</li>
                  <li className="py-3 text-left font-medium">3. PICTIONARY: One member of the team is the picturist, illustrating the word chosen to enable their teammates to guess that word within the given time limit. As the name of the game goes, no letter should be used in the pictures. </li>
                  <li className="py-3 text-left font-medium">4. WHAT’S NEXT? This event makes you complete your teammate’s thoughts, literally. One member of the team will be given a set of words and shall begin a story, on the prompt of the mentors, the next member will take over and then the next to get a complete story</li>.
                  <li className="py-3 text-left font-medium">5. DUMB CHARADS: One member from each team will be assigned as the signaler, he/she will be given a set of words to act out/signal to the other team members. Points are awarded based on the number of words each team is able to decode within the time limit.</li>
                  <li className="py-3 text-left font-medium">6. The more the points you score, more the chances of winning!</li>
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
                  <li className="py-3 text-left font-medium">1.Taha Rangoon-6381492967</li>
                  <li className="py-3 text-left font-medium">2.Mohithmuthu-9150235038</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]'src={pot} style={{width:'70%' , height:'70%'}} />
      </div>
        </section>
    );
};

export default PotPurriRules;