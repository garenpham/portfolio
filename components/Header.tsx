import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '@/typings';

type Props = {
	socials: Social[];
};

const style = {
	wrapper: `sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center`,
	icons: `flex flex-row items-center`,
	mail: `flex flex-row items-center text-gray-300 cursor-pointer`,
	getintouch: `uppercase hidden md:inline-flex text-sm text-gray-400`,
};

function Header({ socials }: Props) {
	return (
		<header className={style.wrapper}>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.4 }}
				className={style.icons}>
				{/* Social Icons */}
				{socials.reverse().map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						target="_blank"
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.4 }}
				className={style.mail}>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					url="#contact"
					fgColor="gray"
					bgColor="transparent"
				/>
				<a
					href="#contact"
					className={style.getintouch}>
					Get In Touch
				</a>
			</motion.div>
		</header>
	);
}
export default Header;
