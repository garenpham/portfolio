import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
	skills: SkillType[];
};

const style = {
	wrapper: `relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-[100svh] md:min-h-screen justify-center xl:space-y-0 mx-auto items-center`,
	title: `absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl`,
	container: `grid grid-cols-4 gap-5 md:pt-[6rem]`,
};

function Skills({ skills }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={style.wrapper}>
			<h3 className={`${style.title} ml-4`}>Skills</h3>

			<h3 className={`${style.title} top-36 tracking-[3px] text-sm`}>
				Hover over a skill for current proficiency
			</h3>

			<div className={style.container}>
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill
						key={skill._id}
						skill={skill}
					/>
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill
						key={skill._id}
						skill={skill}
						directionLeft
					/>
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
