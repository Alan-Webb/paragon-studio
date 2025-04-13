import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Teachers from "./components/Teachers";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

const App = () => {
	return (
		<main className="overflow-x-hidden antialiased text-black-900">
			<Navbar />
			<Hero />
			<Discover />
			<Teachers />
			<About />
			<Reviews />
			<Contact />
		</main>
	);
};

export default App;
