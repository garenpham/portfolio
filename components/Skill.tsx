import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { urlFor } from '@/lib/sanity';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
	directionLeft?: boolean;
	skill: Skill;
};

const style = {
	wrapper: `group relative flex cursor-pointer`,
	img: `rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out`,
	percentage__wrapper: `absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white focus:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0`,
	percentage__container: `flex items-center justify-center h-full`,
	percentage: `text-3xl font-bold text-black opacity-100`,
};

function MobileView({ directionLeft, skill }: Props) {
	return (
		<div className={style.wrapper}>
			<motion.img
				initial={{
					x: directionLeft ? -40 : 40,
					opacity: 0,
				}}
				transition={{ duration: 0.4 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skill?.image).url()}
				className={style.img}
			/>
			<div className={style.percentage__wrapper}>
				<div className={style.percentage__container}>
					<p className={style.percentage}>{skill.progress}</p>
				</div>
			</div>
		</div>
	);
}

function Skill({ directionLeft, skill }: Props) {
	const isMobile = useMediaQuery('(max-width: 640px)');

	return (
		<>
			{isMobile ? (
				<MobileView
					directionLeft={directionLeft}
					skill={skill}
				/>
			) : (
				<div className={style.wrapper}>
					<motion.img
						initial={{
							x: directionLeft ? -200 : 200,
							opacity: 0,
						}}
						transition={{ duration: 0.4 }}
						whileInView={{ opacity: 1, x: 0 }}
						src={urlFor(skill?.image).url()}
						className={style.img}
					/>
					<div className={style.percentage__wrapper}>
						<div className={style.percentage__container}>
							<p className={style.percentage}>{skill.progress}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Skill;
