import {ABOUT_CONTENT} from "../constants";
import {motion} from "framer-motion";

const About = () => {
	const imageVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0},
	};

	return (
		<section
			className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 px-6"
			id="about">
			<h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
				{ABOUT_CONTENT.title}
			</h2>
			<div className="mb-10 flex items-center justify-center gap-4">
				{ABOUT_CONTENT.aboutImages.map((image, index) => (
					<motion.img
						variants={imageVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}}
						transition={{duration: 0.5, delay: image.delay}}
						key={index}
						src={image.src}
						alt={image.alt}
						className="w-1/4 rounded-3xl shadow-lg border border-emerald-950"
						loading="eager"
					/>
				))}
			</div>
			<p className="mb-8 max-w-4xl text-center text-xl lg:text-3xl">
				{ABOUT_CONTENT.aboutText}
			</p>
		</section>
	);
};

export default About;
