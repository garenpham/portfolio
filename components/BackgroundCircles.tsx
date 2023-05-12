import { motion } from 'framer-motion';

type Props = {};

const style = {
	wrapper: `relative flex justify-center items-center`,
	circle__first: `absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping`,
	circle__second: `absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping`,
	circle__third: `absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping`,
	circle__fourth: `rounded-full border border-[#0af71e] opacity-20 h-[440px] w-[440px] md:h-[650px] md:w-[650px] absolute mt-[18rem] md:mt-52 animate-pulse`,
	circle__fifth: `absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping`,
};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{
				duration: 2.5,
			}}
			className={style.wrapper}>
			<div className={style.circle__first} />
			<div className={style.circle__second} />
			<div className={style.circle__third} />
			<div className={style.circle__fourth} />
			<div className={style.circle__fifth} />
		</motion.div>
	);
}
export default BackgroundCircles;
