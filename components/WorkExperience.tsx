import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
	experiences: Experience[];
};

const style = {
	wrapper: `h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center`,
	title: `absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4`,
	container: `h-full w-full flex md:justify-center space-x-5 overflow-x-scroll px-10 py-20 snap-x snap-mandatory scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#0af71e]/80`,
};

function WorkExperience({ experiences }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={style.wrapper}>
			<h3 className={style.title}>Experience</h3>

			<div className={style.container}>
				{experiences.reverse().map((experience) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</motion.div>
	);
}

export default WorkExperience;
