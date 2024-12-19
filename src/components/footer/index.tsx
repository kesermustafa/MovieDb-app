import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<div className="h-[80px] bg-[var(--dark-blue)] text-white flex flex-col justify-center items-center">
			<h1 className={"flex gap-2 items-center"}>
				Created by
				<Link
					target="_blank"
					to={'https://github.com/beyzaaakeser'}
					className="italic text-[var(--blue)] text-xl"
				>
					Beyza Keser
				</Link>
			</h1>
			<h2> &copy; All Rights Reserved</h2>
		</div>
	);
};

export default Footer;
