import {useEffect, useState} from "react";
import logo from "../assets/logo.png";
import {FaTimes, FaBars} from "react-icons/fa";
import {LINKS} from "../constants";

const Navbar = (e) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = (e) => {
			if (isOpen) {
				e.preventDefault();
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isOpen]);

	const handleLinkClick = (e, id) => {
		setIsOpen(false);
		const offset = -70;
		const element = document.getElementById(id);
		const elementPosition =
			element.getBoundingClientRect().top + window.scrollY;
		const offsetPosition = elementPosition + offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};

	return (
		<>
			<nav className="fixed z-10 w-full border-b border-black-50/10 bg-emerald-600">
				<div className="container mx-auto px-4">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<a href="/">
								<img src={logo} alt="Paragon Studio logo" />
							</a>
							<span className="text-4xl text-black font-bold uppercase ml-6">
								Paragon Studio
							</span>
						</div>
						<div>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center bg-emerald-950 p-2 text-orange-50 rounded-xl">
								<FaBars className="h-6 w-6 cursor-pointer" />
							</button>
						</div>
					</div>
				</div>
			</nav>
			{isOpen && (
				<div className="fixed inset-0 z-20 flex flex-col space-y-8 bg-emerald-950 px-20 pt-20 text-5xl font-bold uppercase text-emerald-100 lg:text-6xl">
					<button
						onClick={() => setIsOpen(false)}
						type="button"
						className="absolute right-4 top-4 rounded-full bg-emerald-900 p-2 text-orange-50 lg:right-20">
						<FaTimes className="h-8 w-8 cursor-pointer" />
					</button>
					{LINKS.map((link, index) => (
						<a
							key={index}
							href={`#${link.id}`}
							onClick={() => handleLinkClick(e, link.id)}
							className="transition-colors duration-500 hover:text-orange-500">
							{link.name}
						</a>
					))}
				</div>
			)}
		</>
	);
};

export default Navbar;
