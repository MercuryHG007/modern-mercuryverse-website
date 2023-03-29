'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion.js';

const ExploreCard = ({ id, imgUrl, title, index, active, seat, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3
        className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
      >
        {title}
      </h3>
    ) : (
      <div
        className="absolute flex bottom-0 xxs:p-5 xl:p-8 w-full xxs:h-[50%] lg:h-[45%] xl:h-[30%] xxs:flex-row lg:flex-col xxs:justify-evenly md:justify-start xxs:items-center lg:items-start sm:gap-2 md:gap-3  bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
      >
        <div
          className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] glassmorphism mb-[16px] xxs:m-0`}
        >
          <img
            src={seat.imgUrl}
            alt="headset"
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
        <div
          className="flex flex-col"
        >
          <p
            className="font-normal text-[16px] leading-[20px] text-white uppercase"
          >
            Seat of <span className="font-semibold">{seat.title}</span>
          </p>
          <h2
            className="xxs:mt-[0] mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white"
          >
            {title}
          </h2>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
