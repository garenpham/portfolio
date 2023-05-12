import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const style = {
	wrapper: `h-screen relative flex flex-col text-center md:text-left md:flex-row md:max-w-7xl justify-evenly mx-auto items-center`,
	title: `absolute top-[10rem] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4`,
	content: `flex flex-col space-y-6 md:space-y-10 mt-[8rem] md:mt-[2rem]`,
	subtitle: `text-2xl md:text-4xl font-semibold text-center px-10`,
	txt: `decoration-[#0af71e]/50 underline`,
	contact: `space-y-4 md:space-y-10`,
	contact__container: `flex items-center space-x-2 md:space-x-5 justify-center`,
	contact__icon: `text-[#0af71e] w-7 h-7 animate-pulse`,
	contact__detail: `text-lg md:text-2xl`,
	form: `flex flex-col space-y-2 w-fit mx-auto`,
	name: `flex space-x-2`,
	input: `outline-none bg-slate-400/10 rounded-sm border-b px-4 py-4 md:px-6 md:py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#0af71e]/40 focus:text-[#0af71e]/40 hover:border-[#0af71e]/40`,
	btn: `bg-[#0af71e] py-4 md:py-5 rounded-md text-black font-bold text-lg`,
};

function Contact({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:tanphamminh2002@gmail.com?subject=${formData.subject} - ${formData.name}&body=${formData.message}`;
	};

	return (
		<div className={style.wrapper}>
			<h3 className={style.title}>Contact</h3>

			<div className={style.content}>
				<h4 className={style.subtitle}>
					I have got just what you need.{' '}
					<span className={style.txt}>Let's Talk.</span>
				</h4>

				<div className={style.contact}>
					<div className={style.contact__container}>
						<PhoneIcon className={style.contact__icon} />
						<a
							href="tel:+12367887217"
							target="_blank"
							className={style.contact__detail}>
							+1 (236) 788 7217
						</a>
					</div>

					<div className={style.contact__container}>
						<EnvelopeIcon className={style.contact__icon} />
						<a
							href="mailto:tanphamminh2002@gmail.com"
							target="_blank"
							className={style.contact__detail}>
							tanphamminh2002@gmail.com
						</a>
					</div>

					<div className={style.contact__container}>
						<MapPinIcon className={style.contact__icon} />
						<a
							href="https://goo.gl/maps/fDfPQhudD8hPTw4k6"
							target="_blank"
							className={style.contact__detail}>
							Burnaby, British Columbia, Canada
						</a>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className={style.form}>
					<div className={style.name}>
						<input
							{...register('name')}
							className={`${style.input} w-[10rem] md:w-fit`}
							placeholder="Name"
							type="text"
						/>
						<input
							{...register('email')}
							className={`${style.input} w-[10rem] md:w-fit`}
							placeholder="Email"
							type="email"
						/>
					</div>

					<input
						{...register('subject')}
						className={style.input}
						placeholder="Subject"
						type="text"
					/>

					<textarea
						{...register('message')}
						placeholder="Message"
						className={style.input}
					/>

					<button
						type="submit"
						className={style.btn}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
