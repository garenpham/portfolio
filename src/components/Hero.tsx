import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

type Props = {};

const style = {
	wrapper: `${styles.paddingX} xl:px-0 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,
	wrapper2: `flex flex-col justify-center items-center mt-5`,
	dot: `w-5 h-5 rounded-full bg-[#915eff]`,
	line: `w-1 sm:h-80 h-40 violet-gradient`,
};

const Hero = (props: Props) => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={style.wrapper}>
				<div className={style.wrapper2}>
					<div className={style.dot} />
					<div className={style.line} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
