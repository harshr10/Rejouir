import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';


import AdaptTunesRules from './EventsDay1/Rules/AdaptTunesRules';
import BoxCricketRules from './EventsDay1/Rules/BoxCricketRules';
import DegreeInADayRules from './EventsDay1/Rules/DegreeInADayRules';
import ExtemporeRules from './EventsDay1/Rules/ExtemporeRules';
import SoloSingingRules from './EventsDay1/Rules/SoloSingingRules';
import TreasureHuntRules from './EventsDay1/Rules/TreasureHuntRules';
import ValorantRules from './EventsDay3/Rules/ValorantRules';
import ChoreoNightRules from './EventsDay2/Rules/ChoreoNightRules';
import PhotographyRules from './EventsDay2/Rules/PhotographyRules';
import BattleOfBandsRules from './EventsDay2/Rules/BattleOfBandsRules';
import VarietyVarietySoloRules from './EventsDay2/Rules/VarietyVarietySoloRules';

import StayTuned from './StayTuned';
import RampWalkRules from './EventsDay2/Rules/RampWalkRules';
import CircuitDebuggingRules from './EventsDay2/Rules/CircuitDebuggingRules';
import BridgePrototypeRules from './EventsDay2/Rules/BridgePrototypeRules';
import AnimeQuizRules from './EventsDay2/Rules/AnimeQuizRules';
import LipSyncRules from './EventsDay2/Rules/LipSyncRules';
import ConnectionRules from './EventsDay2/Rules/ConnectionRules';
import MemeManiaRules from './EventsDay2/Rules/MemeManiaRules';
import ReelsRules from './EventsDay2/Rules/ReelsRules';
import SquidGameRules from './EventsDay2/Rules/SquidGameRules';
import FacePaintingRules from './EventsDay2/Rules/FacePaintingRules';
import CineQuizRules from './EventsDay2/Rules/CineQuizRules';
import EatathonPaniPuriRules from './EventsDay2/Rules/EathatonPaniPuriRules';
import ShortFilmRules from './EventsDay2/Rules/ShortFilmRules';
import MathiYosiRules from './EventsDay2/Rules/MathiYosiRules';
import DebuggingRules from './EventsDay3/Rules/DebuggingRules';
import RoboRaceRules from './EventsDay3/Rules/RoboRaceRules';
import VarietyVarietyGroup from './EventsDay3/Rules/VarietyVarietyGroupRules';
import ClashCodesRules from './EventsDay3/Rules/ClashOfCodesRules';
import PushUpRules from './EventsDay3/Rules/PushUpRules';
import PotPurriRules from './EventsDay3/Rules/PotPurriRules';
import LyricFndingRules from './EventsDay3/Rules/LyricFindingRules';
import SeriesQuizRules from './EventsDay3/Rules/SeriesQuizRules';
import BGMIRules from './EventsDay3/Rules/BGMIRules';
import FifaRules from './EventsDay2/Rules/FifaRules';
import SellMeThisPenRules from './EventsDay1/Rules/SellMeThisPenRules';
import DebateRules from './EventsDay3/Rules/DebateRules';
import BiriyaniRules from './EventsDay3/Rules/EatathonBriyaniRules';
import WhatsTheClimaxRules from './EventsDay3/Rules/WhatsTheClimaxRules';
import SoloDanceRules from './EventsDay3/Rules/SoloDanceRules';
import IplAuctionRules from './EventsDay3/Rules/IplAuctionRules';
import SlowBikeRaceRules from './EventsDay3/Rules/SlowBikeRace';
import MehndiRules from './EventsDay3/Rules/MehndiRules';

const DetailedEvents = () => {

  const { name } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const index = name.indexOf('viewform', 30);
  const url = name.slice(0, index + 8);
  const Title = name.slice(index + 8, name.length)
  const title = Title.replace('-', ' ');
  return (
    <section className='my-[40px] xl:my-[80px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-sky-500 md:text-6xl md:tracking-tight" >
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-sky-500 to-red-500 lg:inline" data-aos='fade-down' >{title}</span> | <span data-aos='fade-up' class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-red-500 to-sky-500 lg:inline">REGISTER BELOW</span>
          </h1>
          <h3 data-aos='fade-left' className="font-mono text-gray-500 dark:text-white text-xl font-semibold">Warm greetings to everyone,
            Kindly follow through the Instructions and Register.</h3>
           <span className="py-3 text-left text-xl text-red-600 font-semibold">NOTE: AFTER COMPLETING THE REGISTRAION ONLINE THE PARTCIPANTS HAVE TO COLLECT A REGISTRAION SLIP FROM THE REGISTRATION DESK</span>
          <h2 className='font-semibold text-xl mt-3 font-serif pt-2 dark:text-green-600'> All participant Must Bring Their College ID's</h2>

          {/* Day1 */}

          {title === "Adapt Tunes" && <AdaptTunesRules />}

          {title === "Solo Singing" && <SoloSingingRules />}

          {title === "Treasure Hunt" && <TreasureHuntRules />}

          {title === "Box Cricket" && <BoxCricketRules />}

          {title === "Degree In A Day" && <DegreeInADayRules />}

          {title === "Extempore" && <ExtemporeRules />}

          {title === "Sell Me this Pen" && <SellMeThisPenRules />}

          {/* Day2 */}

          {title === 'Choreo Night' && <ChoreoNightRules />}

          {title === 'Variety Variety Solo' && <VarietyVarietySoloRules />}

          {title === 'Battle Of Bands' && <BattleOfBandsRules />}

          {title === "Ramp Walk" && <RampWalkRules />}

          {title === "Circuit Debugging" && <CircuitDebuggingRules />}

          {title === "Bridge Prototype" && <BridgePrototypeRules />}

          {title === "Anime Quiz" && <AnimeQuizRules />}

          {title === "Lip Sync" && <LipSyncRules />}

          {title === "Connection" && <ConnectionRules />}

          {title === "Meme Mania" && <MemeManiaRules />}

          {title === "Reels" && <ReelsRules />}

          {title === "Squid Game" && <SquidGameRules />}

          {title === "Face Painting" && <FacePaintingRules />}

          {title === "Cine Quiz" && <CineQuizRules />}

          {title === "Photography" && <PhotographyRules />}

          {title === "Eatathon - Pani Puri" && <EatathonPaniPuriRules />}

          {title === "Short Film" && <ShortFilmRules />}

          {title === "Fifa" && <FifaRules />}

          {title === "Mathi Yosi" && <MathiYosiRules />}

          {/*Day3 */}

          {title === "Variety Variety Group" && <VarietyVarietyGroup />}

          {title === "Solo Dance" && <SoloDanceRules />}

          {title === "Clash Of Codes" && <ClashCodesRules />}

          {Title === "Debugging" && <DebuggingRules />}

          {Title === "Line-Follower||Robo Race" && <RoboRaceRules />}

          {title === "Valorant" && <ValorantRules />}

          {title === "Series Quiz" && <SeriesQuizRules />}

          {title === "Ipl Auction" && <IplAuctionRules />}

          {title === "Slow Bike Race" && <SlowBikeRaceRules />}

          {title === "Eatathon - Biriyani" && <BiriyaniRules />}

          {title === "Pushup Challenge" && <PushUpRules />}

          {title === "Lyric Finding" && <LyricFndingRules />}

          {Title === "Mehndi" && <MehndiRules />}

          {title === "Pot Pourri" && <PotPurriRules />}

          {title === "Debate" && <DebateRules />}

          {title === "What's The Climax" && <WhatsTheClimaxRules />}

          {title === "Battle Grounds Mobile India" && <BGMIRules />}

          <div align="center" className="my-[50px]">
            <h1 className="text-3xl py-2 dark:text-neutral-300"><a className="text-blue-500 hover:text-lime-500 dark:hover:text-lime-500 dark:text-blue-400 font-bold" target="_parent" href={url}>Click Here </a>To Fill The Form</h1>
        </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedEvents;



