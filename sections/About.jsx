'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts.jsx';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion.js';

const About = () => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <div
      className="gradient-02 z-0"
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About GOT"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white">Metaverse </span>is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className="font-extrabold text-white"> madness of the metaverse </span> of today, using only <span className="font-extrabold text-white"> VR</span> devices you can easily explore the metaverse world you want,<span className="font-extrabold text-white"> turn your dreams into reality.</span> Let's explore the madness of the metaverse by scrolling down. */}
        <span className="font-extrabold text-white">Game of Thrones</span> is a popular television series based on the series of fantasy novels by <span className="font-extrabold text-white">George R. R. Martin</span>. The series is set in the fictional <span className="font-extrabold text-white">world of Westeros</span>, a continent with seven kingdoms ruled by <span className="font-extrabold text-white">different families</span>. The story follows the political and personal struggles between various noble houses as they vie for <span className="font-extrabold text-white">power and control of the Iron Throne</span>, the seat of power in Westeros.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
