import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/lib/sanity';

type Props = {
	pageInfo: PageInfo;
};

const style = {
	wrapper: `h-screen flex flex-col space-y-8 items-ceter pt-[8rem] md:justify-center text-center overflow-hidden`,
	profileImg: `relative rounded-full mx-auto`,
	title: `text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[12px]`,
	subtitle: `text-2xl md:text-3xl font-semibold md:px-10`,
	subtitle__text: `text-3xl md:text-4xl mr-2`,
	menu: `pt-2 md:pt-5`,
	content: `z-20`,
	btn: `px-2 md:px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40`,
};

function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: pageInfo.jobs,
		loop: true,
		typeSpeed: 100,
		deleteSpeed: 69,
		delaySpeed: 2000,
	});
	return (
		<div className={style.wrapper}>
			<BackgroundCircles />
			<Image
				alt="Profile Image"
				src={urlFor(pageInfo?.heroImage).url()}
				height={128}
				width={128}
				className={style.profileImg}
			/>
			<div className={style.content}>
				<h1 className={style.title}>{pageInfo?.name}</h1>
				<h2 className={style.subtitle}>
					I do&nbsp;
					<span className={style.subtitle__text}>
						{text}
						<Cursor cursorColor="#F7AB0A" />
					</span>
				</h2>
				<div className={style.menu}>
					<Link href="#about">
						<button className={style.btn}>About</button>
					</Link>
					<Link href="#experience">
						<button className={style.btn}>Experience</button>
					</Link>
					<Link href="#skills">
						<button className={style.btn}>Skills</button>
					</Link>
					<Link href="#projects">
						<button className={style.btn}>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Hero;
