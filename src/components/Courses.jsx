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
								className="w-full rounded-3xl border border-emerald-950"
							/>
						</div>
						<div className="w-full md:w-1/2">
							<h2 className="mb-2 text-2xl font-semibold text-emerald-950">
								{course.title}
							</h2>
							<p className="mb-2 text-3xl text-emerald-950 lg:text-4xl">
								{course.description}
							</p>
							<p className="mb-4 text-lg text-emerald-950 lg:text-2xl">
								{course.details}
							</p>
							<table className="min-w-full text-lg lg:text-xl">
								<tbody>
									<tr>
										<td className="px-6 py-1 font-medium text-emerald-950">
											Experience Required
										</td>
										<td className="px-6 py-1 text-emerald-950">
											{course.specifics.experience}
										</td>
									</tr>
									<tr>
										<td className="px-6 py-1 font-medium text-emerald-950">
											Duration
										</td>
										<td className="px-6 py-1 text-emerald-950">
											{course.specifics.duration}
										</td>
									</tr>
									<tr>
										<td className="px-6 py-1 font-medium text-emerald-950">
											Outcome
										</td>
										<td className="px-6 py-1 text-emerald-950">
											{course.specifics.outcome}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
