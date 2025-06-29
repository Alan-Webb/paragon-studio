import {HERO_IMAGES} from "../constants";
import {IoMdArrowRoundForward} from "react-icons/io";
import heroImg from "../assets/heroImg.webp";
import video from "../assets/hero-video.mp4";
import {motion} from "framer-motion";

const Hero = () => {
	return (
		<section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50">
			<div className="w-full p-8 md:w-1/2">
				<div className="mb-4 flex space-x-5">
					{HERO_IMAGES.map((teacher, index) => (
						<motion.img
							initial={{opacity: 0, scale: 0.6}}
							animate={{opacity: 1, scale: 1}}
							transition={{duration: 2, delay: teacher.delay}}
							key={index}
							src={teacher.image}
							alt={teacher.name}
							className="h-8 w-8 md:h-12 md:w-12 rounded-full border-2 border-orange-50"
							loading="eager"
						/>
					))}
				</div>
				<h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
					Explore our training videos and
					<span className="text-orange-500"> master every move</span> in your
					own time
				</h1>
				<motion.button
					initial={{opacity: 0, y: +200}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 2.5}}
					className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800 cursor-pointer">
					<a href="#discover">Learn More</a>
					<IoMdArrowRoundForward />
				</motion.button>
			</div>
			<div className="md:w-1/2 lg:p-8">
				<video
					autoPlay
					loop
					muted
					className="w-full -mt-12 ms-6 md:mx-auto max-w-[85vw] rounded-xl border border-orange-50">
					<source src={video} type="video/mp4"></source>
				</video>
			</div>
		</section>
	);
};

export default Hero;
