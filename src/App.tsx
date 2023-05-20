import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from './components';

const style = {
	wrapper: `relative z-0 bg-primary`,
	nav_con: `bg-hero-pattern bg-cover bg-center bg-no-repeat`,
};

function App() {
	return (
		<BrowserRouter>
			<div className={style.wrapper}>
				<div className={style.nav_con}>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
