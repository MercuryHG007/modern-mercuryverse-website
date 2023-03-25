'use client';

import { motion } from 'framer-motion';
import { MemberComp, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion.js';
import { houseMembers } from '../constants';

const TheHouse = ({ house }) => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: 'false',
        amount: 0.25,
      }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter} w-max-[40px]`}
      >
        <img
          src={house.imgUrl}
          alt="get-started"
          className="w-[500px] h-[80%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 3)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText
          title="| The House"
        // textStyles="text-center"
        />
        <TitleText
          // title={<>Get started with just a few clicks</>}
          title={house.title}
        // textStyles="text-center"
        />
        <div
          className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
        >
          {(houseMembers[house.title.toLowerCase().substring(6)].map((member) => (
            <MemberComp
              key={member.id}
              {...member}
            />
          )))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default TheHouse;
