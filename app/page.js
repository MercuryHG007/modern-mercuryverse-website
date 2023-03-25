'use client';

import { useState } from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, TheHouse, Hero, Insights, WhatsNew, World } from '../sections';
import { exploreHouse } from '../constants';

const Page = () => {
  const [house, setHouse] = useState('house-2');

  return (
    <div
      className="bg overflow-hidden"
    >
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore
          house={house}
          changeHouse={setHouse}
        />
      </div>
      <div className="relative">
        <TheHouse
          house={exploreHouse.find((place) => place.id === house)}
        />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
