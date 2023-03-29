import styles from '../styles';

// const MemberComp = ({ name, imgUrl, desc }) => (
const MemberComp = ({ name, imgUrl }) => (
  <div
    className={`${styles.flexCenter} flex-row`}
  >
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img
        src={imgUrl}
      />
    </div>
    <p
      className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]"
    >
      {name}
    </p>
  </div>
);

export default MemberComp;
