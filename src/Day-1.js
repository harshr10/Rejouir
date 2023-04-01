import React, { useEffect, useState } from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import CulturalEventsDay1 from './components/EventsDay1/CulturalEventsDay1';
import NonTechnicalEventsDay1 from './components/EventsDay1/NonTechnicalEventsDay1';
import LiteraryEventsDay1 from './components/EventsDay1/LiteraryEventsDay1';
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
            <CulturalEventsDay1 />
            <NonTechnicalEventsDay1 />
			<LiteraryEventsDay1 />
           
    </div>
  );
};

export default App;
