'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion.js';

import { exploreHouse, exploreSeat } from '../constants';

const Explore = ({ house, changeHouse }) => {
  const [active, setActive] = useState(house);

  const ActiveHouse = (seat) => {
    setActive(seat);
    changeHouse(seat);
  };

  return (
    <section
      className={`${styles.paddings}`}
      id="explore"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| The Seats"
          textStyles="text-center"
        />
        <TitleText
          title={<> Choose the Seats you want <br className="md:block hidden" /> to explore.</>}
          textStyles="text-center"
        />
        <div
          className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
        >
          {exploreSeat.map((seat, index) => (
            <ExploreCard
              key={seat.id}
              {...seat}
              index={index}
              active={active}
              seat={exploreHouse.find((place) => place.id === seat.id)}
              handleClick={() => ActiveHouse(seat.id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
