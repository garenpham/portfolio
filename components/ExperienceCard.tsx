import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/lib/sanity';
import { link } from 'fs';

type Props = {
	experience: Experience;
};

const style = {
	wrapper: `flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[860px] mt-[5rem] md:mt-[6rem] snap-center bg-[#292929] p-10 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden`,
	img: `w-32 h-32 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center`,
	container: `px-0 md:px-10`,
	summary: `list-disc space-y-4 ml-2 md:ml-5 text-sm md:text-md h-[50vw] xl:h-[14vw] overflow-x-hidden overflow-y-scroll md:scrollbar-thin scrollbar-track-[#292929] scrollbar-thumb-[#f7ab0a]/80`,
	job: `text-sm md:text-4xl font-light`,
	company: `font-bold text-sm md:text-2xl mt-1`,
	tech: `flex space-x-2 my-2`,
	tech__logo: `h-6 w-6 rounded-full`,
	duration: `uppercase py-5 text-gray-300 text-xs md:text-lg`,
};

function ExperienceCard({ experience }: Props) {
	return (
		<article className={style.wrapper}>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className={style.img}
				alt="logo"
				src={urlFor(experience?.companyImage).url()}
			/>

			<div className={style.container}>
				<h4 className={style.job}>{experience.jobTitle}</h4>
				<p className={style.company}>{experience.company}</p>
				<div className={style.tech}>
					{experience.technologies?.map((technology) => (
						<img
							key={technology._id}
							className={style.tech__logo}
							src={urlFor(technology.image).url()}
						/>
					))}
				</div>
				<p className={style.duration}>
					{new Date(experience.dateStarted).toDateString()} -{' '}
					{experience.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul className={style.summary}>
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
