import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { IoIosArrowUp } from 'react-icons/io';

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const style = {
	wrapper: `bg-[rgb(36,36,36)] text-white h-screen md:snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scroll-smooth`,
	start: `snap-start`,
	center: `snap-center`,
	footer: `sticky bottom-5 w-full cursor-pointer`,
	img__container: `flex items-center justify-center`,
	icon: `h-10 w-10 rounded-full filter opacity-20 hover:text-[#f7ab0a] hover:opacity-100 cursor-pointer`,
};

export default function Home({
	pageInfo,
	experiences,
	skills,
	projects,
	socials,
}: Props) {
	//console.log(pageInfo, experiences, skills, projects, socials);
	return (
		<div className={style.wrapper}>
			<Head>
				<title>Tan Minh Pham's Portfolio</title>
				<meta
					name="description"
					content="Created by Tan Minh Pham"
				/>
				<meta
					property="og:image"
					content="/contact.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<Header socials={socials} />

			<section
				id="hero"
				className={style.start}>
				<Hero pageInfo={pageInfo} />
			</section>

			<section
				id="about"
				className={style.center}>
				<About pageInfo={pageInfo} />
			</section>

			<section
				id="experience"
				className={style.center}>
				<WorkExperience experiences={experiences} />
			</section>

			<section
				id="skills"
				className={style.start}>
				<Skills skills={skills} />
			</section>

			<section
				id="projects"
				className={style.start}>
				<Projects projects={projects} />
			</section>

			<section
				id="contact"
				className={style.start}>
				<Contact />
			</section>

			<Link href="#hero">
				<footer className={style.footer}>
					<div className={style.img__container}>
						<IoIosArrowUp className={style.icon} />
					</div>
				</footer>
			</Link>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		revalidate: 60 * 60 * 24,
	};
};
