import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';

type Props = {
	projects: Project[];
};

const style = {
	wrapper: `h-[90vh] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0`,
	title: `absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4`,
	projects: `relative w-full max-h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-[2.4rem] md:pt-[2rem] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80`,
	project: `w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44`,
	img: `w-[240px] h-[134px] md:w-[440px] md:h-[290px]`,
	slash: `w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12`,
	casestudy__container: `space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl`,
	casestudy__title: `text-2xl md:text-4xl font-semibold text-center`,
	casestudy: `underline decoration-[#f7ab0a]/50`,
	casestudy__description: `text-md md:text-lg text-center md:text-left`,
	tech__container: `flex items-center space-x-2 justify-center`,
	tech: `h-6 w-6 md:h-8 md:w-8`,
	btn: `bg-[#f7ab0a] py-4 px-8 text-md md:py-5 md:px-10 md:text-lg rounded-md text-black font-bold`,
};

function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={style.wrapper}>
			<h3 className={style.title}>Projects</h3>

			<div className={style.projects}>
				{projects?.map((project, i) => (
					<div
						key={project._id}
						className={style.project}>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src={urlFor(project?.image).url()}
							alt=""
							className={style.img}
						/>

						<div className={style.casestudy__container}>
							<h4 className={style.casestudy__title}>
								<span className={style.casestudy}>
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								{project?.title}
							</h4>

							<div className={style.tech__container}>
								{project?.technologies.map((technology) => (
									<img
										key={technology._id}
										src={urlFor(technology.image).url()}
										className={style.tech}
									/>
								))}
							</div>

							<p className={style.casestudy__description}>{project?.summary}</p>
						</div>
						<Link
							href={project?.linkToBuild}
							target="_blank">
							<button className={style.btn}>View Project</button>
						</Link>
					</div>
				))}
			</div>

			<div className={style.slash} />
		</motion.div>
	);
}

export default Projects;
