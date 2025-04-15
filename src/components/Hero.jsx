import {HERO_IMAGES} from "../constants";
import {IoMdArrowRoundForward} from "react-icons/io";
import heroImg from "../assets/heroImg.jpg";

const Hero = () => {
	return (
		<section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50">
			<div className="w-full p-8 md:w-1/2">
				<div className="mb-4 flex space-x-5">
					{HERO_IMAGES.map((teacher, index) => (
						<img
							key={index}
							src={teacher.image}
							alt={teacher.name}
							className="h-12 w-12 rounded-full border-2 border-orange-50"
						/>
					))}
				</div>
				<h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
					Explore our training videos and
					<span className="text-orange-500"> master every move</span> in your
					own time
				</h1>
				<button className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800">
					<span>Learn More</span>
					<IoMdArrowRoundForward />
				</button>
			</div>
			<div className="w-full md:w-1/2 lg:p-8">
				<img src={heroImg} alt="Paragon Studio HQ" className="h-auto w-full rounded-xl border border-orange-50" />
			</div>
		</section>
	);
};

export default Hero;
