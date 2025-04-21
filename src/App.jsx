import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Discover from "./components/Discover";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Teachers from "./components/Teachers";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
			<Faq />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
