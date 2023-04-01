import robo from '../Posters/Robot.jpg';
const RoboRaceRules = () => {
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
                <h1 className="text-lg text-left text-violet-700 py-3 text-xl font-bold"> Terms and Conditions: </h1>
                <ul className="list-outside py-3" data-aos='fade-left'>
                <li className="py-3 text-left text-xl text-red-600 font-semibold">1. The Entry Fee is <span className='text-bold text-red-600 text-2xl'>₹200</span> per Team.</li>
                  <li className="py-3 text-left font-medium">2. 1 robot per team </li>
                  <li className="py-3 text-left font-medium">3. Maximum member per team-4</li>
                  <li className="py-3 text-left font-medium">4. Arena Specification-210 cm x 210 cm (path width: 1 inch, black line )</li>
                  <li className="py-3 text-left font-medium">5. Robot control : Autonomous</li>
                  <li className="py-3 text-left font-medium">6. Engineering principles: Mechanical , Electrical, Computer science engineering and sensor applications</li>
                  <li className="py-3 text-left font-medium">7. A robot that cannot complete the course in the allotted time shall be disqualified.</li>
                  <li className="py-3 text-left font-medium">8. Timekeeping: Time shall be measured by a judge with a stopwatch, based on th availability of equipment. The recorded time shall be final.</li>
                  <li className="py-3 text-left font-medium">9. Autonomous Control: Once the robot has crossed the starting line it must remain fully autonomous, or it will be disqualified.</li>
                  <li className="py-3 text-left font-medium">10. Time is measured from the time the robot crosses the starting line until the time it crosses the finish line. A robot is deemed to have crossed the line when the forward most wheel, track, or leg of the robot crosses over the line.</li>
                  <li className="py-3 text-left font-medium">11. Round 1: The robot is supposed to follow the line and cross the finish line without deviation. The robots taking the shortest time to traverse will be shortlisted for the next round. </li>
                  <li className="py-3 text-left font-medium">12. Clauses: in case the robot fails to reach the finish line or deviates, in total 3 tries (3 touches) will be allowed. In each case, the robot has to start from the starting point.</li>
                  <li className="py-3 text-left font-medium">13.The robot needs to be completely autonomous.  No trial or calibration will be allowed. The line width is around 1 to 1.5 inches ( around 3 cm).</li>
                  <li className="py-3 text-left font-medium">14. Round 2: Obstacle avoidance line follower. Obstacles will be placed on the track the robot has to avoid them and continue to follow the line and reach the end point. Again the bot taking the shortest time will be considered the winner.</li>
                  <li className="py-3 text-left font-medium">15. In case of a tie in the second round (provided same time has been taken by 2 or more teams), the robot that can traverse back to the starting point will be considered the winner.Time will be given to code the microcontroller. This should not be coded before.</li>
                  <li className="py-3 text-left font-medium">16. Time (around 15 mins)will be provided to make changes in the code after every round. This time is uniform for all the teams. No team is allowed to make any changes after the commencement of the round. If found guilty, the team will be disqualified. </li>
                  <li className="py-3 text-left font-medium">17. Addition or removal of any components or batteries is strictly prohibited after the commencement of the event. </li>
                  <li className="py-3 text-left font-medium">18. The decision of the event coordinators and the judges will be deemed final in case of any discrepancies. </li>
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
                  <li className="py-3 text-left">1.Divyam Thakur-9430664247</li>
                  <li className="py-3 text-left">2.Ra.Srinethe- 6369127917</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={robo} style={{width:'70%' , height:'70%'}}/>
      </div>
        </section>
    );
};

export default RoboRaceRules;