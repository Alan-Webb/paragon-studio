import {COURSES} from "../constants";

const Courses = () => {
	return (
		<section className="container mx-auto px-4 py-12 md:px-8" id="courses">
			<div>
				<h2 className="my-8 text-center justify-center text-4xl font-semibold tracking-tighter">
					Courses
				</h2>
			</div>
			<div className="space-y-16">
				{COURSES.map((course, index) => (
					<div
						key={index}
						className="flex flex-col items-center md:flex-row-reverse md:items-start">
						<div className="w-full p-8 md:w-1/2">
							<img
								src={course.imageUrl}
								alt={course.title}
								className="w-full rounded-3xl"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
