import {useState} from "react";
import logo from "../assets/logo.png";
import {FaTimes, FaBars} from "react-icons/fa";
import {LINKS} from "../constants";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="border-b-2">
			<div className="max-w-7xl mx-auto flex justify-between items-center py-8">
				<div className="pl-2">
					<a href="#">
						<img src={logo} alt="Paragon Studio" />
					</a>
				</div>
				{/* Toggle Button */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-2xl pr-2 focus:outline-none"
						aria-label={isOpen ? "Close Menu" : "Open Menu"}>
						{isOpen ? (
							<FaTimes className="h-6 w-6" />
						) : (
							<FaBars className="h-6 w-6" />
						)}
					</button>
				</div>
				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
					{LINKS.map((link, index) => (
						<a
							key={index}
							href={link.link}
							className="uppercase text-sm font-semibold hover:text-white">
							{link.name}
						</a>
					))}
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} md:hidden absolute w-full py-5 px-4 mt-2 border-b-4`}>
				{LINKS.map((link, index) => (
					<a
						key={index}
						href={link.link}
						className="uppercase text-lg font-semibold block py-2 tracking-wide hover:text-white">
						{link.name}
					</a>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
