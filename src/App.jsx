import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Teachers from "./components/Teachers";
import About from "./components/About";
import Reviews from "./components/Reviews";

const App = () => {
	return (
		<main className="overflow-x-hidden antialiased text-black-900">
			<Navbar />
			<Hero />
			<Discover />
			<Teachers />
			<About />
			<Reviews />
		</main>
	);
};

export default App;
