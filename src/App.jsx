import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Discover from "./components/Discover";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Teachers from "./components/Teachers";
import Testimonials from "./components/Testimonials";

const App = () => {
	return (
		<main className="overflow-x-hidden bg-orange-200 antialiased text-emerald-950">
			<Navbar />
			<Hero />
			<About />
			<Discover />
			<Courses />
			<Pricing />
			<Teachers />
			<Testimonials />
		</main>
	);
};

export default App;
