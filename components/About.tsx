import { urlFor } from '@/lib/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion';

type Props = {
	pageInfo: PageInfo;
};

const style = {
	wrapper: `flex flex-col relative md:h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-start md:justify-evenly mx-auto items-center`,
	title: `absolute top-[10rem] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-5`,
	img: `-mb-20 md:mb-0 mt-[14rem] md:mt-[2rem] flex-shrink-0 w-[12rem] h-[12rem] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]`,
	container: `space-y-6 md:space-y-10 px-0 md:px-10 mt-[7rem]`,
	subtitle: `text-4xl font-semibold`,
	little: `underline decoration-[#0af71e]/50`,
	content: `text-base`,
};

function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={style.wrapper}>
			<h3 className={style.title}>About</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				src={urlFor(pageInfo?.profilePic).url()}
				className={style.img}
			/>

			<div className={style.container}>
				<h4 className={style.subtitle}>
					Here is a <span className={style.little}>little</span> background
				</h4>
				<p className={style.content}>{pageInfo?.backgroundInformation}</p>
			</div>
		</motion.div>
	);
}
export default About;
