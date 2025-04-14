import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Teachers from "./components/Teachers";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<main className="overflow-x-hidden bg-orange-200 antialiased text-emerald-950">
			<Navbar />
			<Hero />
			<Discover />
			<Teachers />
			<About />
			<Reviews />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
