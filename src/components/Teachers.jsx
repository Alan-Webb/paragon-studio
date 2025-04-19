import {TEACHER_PROFILES} from "../constants";

const Teachers = () => {
	return (
		<section className="container mx-auto px-8 py-20" id="teachers">
			<h2 className="mx-8 my-10 text-center text-4xl font-semibold tracking-tighter">
				The finest teachers from around the globe
			</h2>
			<div className="flex flex-wrap">
				{TEACHER_PROFILES.map((teacher, index) => (
					<div
						key={index}
						className="mb-12 flex w-full flex-col items-center px-4 text-center md:w-1/2 lg:w-1/3">
						<img
							src={teacher.image}
							alt={teacher.name}
							className="mb-4 h-48 w-48 rounded-full"
						/>
						<h3 className="font-semibold tracking-tighter lg:text-xl">
							{teacher.name}
						</h3>
						<p className="italic lg:text-lg">{teacher.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Teachers;
