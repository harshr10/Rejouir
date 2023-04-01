import React, { useEffect, useState } from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';


// import components

import Culturalevents3 from './components/EventsDay3/CulturalEventsDay3';
import EsportsEventsDay3 from './components/EventsDay3/EsportsEventsDay3';
import LiteraryEventsDay3 from './components/EventsDay3/LiteraryEventsDay3';
import NonTechnicalEventsDay3 from './components/EventsDay3/NonTechnicalEventsDay3';
import TechnicalEventsDay3 from './components/EventsDay3/TechnicalEventsDay3';
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

			<ScrollToTop />
            <Culturalevents3 />
            <TechnicalEventsDay3/>
            <NonTechnicalEventsDay3 />
            <LiteraryEventsDay3 />
            <EsportsEventsDay3 />
    </div>
  );
};

export default App;
