import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

type Props = {};

const style = {
	wrapper: `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`,
	content: `w-full flex justify-between items-center max-w-7xl mx-auto`,
	logo: `w-9 h-9 object-contain`,
	name: `text-white text-[18px] font-bold cursor-pointer`,
	list: `list-none hidden sm:flex flex-row gap-10`,
	list__content: `hover:text-white text-[18px] font-medium cursor-pointer`,
	mobile: `sm:hidden flex flex-1 justify-end items-center`,
	mobile__con: `p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,
	mobile__list: `list-none flex justify-end items-start flex-col gap-4`,
	mobile__list__content: `font-poppins font-medium cursor-pointer text-[16px]`,
};

const Navbar = (props: Props) => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={style.wrapper}>
			<div className={style.content}>
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}>
					<img
						src={logo}
						alt="logo"
						className={style.logo}
					/>
					<p className={style.name}>
						Tan <span className="sm:inline-block hidden">Minh</span> Pham{' '}
						<span className="sm:inline-block hidden">| BCIT Senior Grad</span>
					</p>
				</Link>

				<ul className={style.list}>
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? 'text-white' : 'text-secondary'
							} ${style.list__content}`}
							onClick={() => setActive(nav.title)}>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className={style.mobile}>
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div className={`${toggle ? 'flex' : 'hidden'} ${style.mobile__con}`}>
						<ul className={`${style.mobile__list} flex`}>
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`${
										active === nav.title ? 'text-white' : 'text-secondary'
									} ${style.mobile__list__content}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
