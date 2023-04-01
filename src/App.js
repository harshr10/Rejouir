import React, { useEffect, useState } from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import Day1 from '../src/Day-1';
import Day2 from '../src/Day-2';
import Day3 from '../src/Day-3';

// import components
import { Route, Routes ,Router} from 'react-router-dom';
import About from './components/About';
import Detailedevents from './components/Detailedevents';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './countdown';
import ScrollToTop from './ScrollToTop';


const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  // dark theme
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('light');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (
    <div className='overflow-hidden dark:bg-gray-900'>
      <button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-50 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌞' : '🌙'}
			</button>
      
      <Header />        
      <Routes>
        <Route exact path='/' element={
          <>
            <Hero />
            <About />
            <Events />
          </>
        }
        />

        <Route exact path='/Day-1' element={<Day1 />} />
        <Route exact path='/Day-2' element={<Day2 />} />
        <Route exact path='/Day-3' element={<Day3 />} />
        <Route exact path='/:name' element={<Detailedevents />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
