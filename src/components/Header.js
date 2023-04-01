import React from 'react';

import ptuLogo from '../assets/img/ptuLogo.png';
import RejouirLogo from '../assets/img/REJOUIR FINAL LOGO updated.png';

const Header = () => {

  return (
    <nav className="sticky top-0 z-20 bg-white  dark:bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-2xl mx-auto">
        <div className="h-16">
          <a href="/" class="flex items-center">
            <img src={ptuLogo} style={{ height: '70px' }} alt="PTU Logo" />
            <span class=" block w-100 py-2 pl-8 md:pl-0 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-red-500 to-blue-700 text-xl font-bold whitespace-wrap lg:invisible md:visible sm:visible">PTU</span>
            <img src={RejouirLogo} class="whitespace-nowrap lg:invisible md:visible sm:visible" style={{ height: '50px', marginLeft: '40px' }} alt="Rejouir Logo" />
            <span class="self-center text-2xl font-bold block py-2 -ml-20 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-red-500 to-blue-700 lg:inline whitespace-nowrap invisible lg:visible">PUDUCHERRY TECHNOLOGICAL UNIVERSITY</span>
            <img src={RejouirLogo} class="whitespace-wrap lg:visible md:invisible sm:invisible" style={{ height: '50px', marginLeft: '40px' }} alt="Rejouir Logo" />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Header;