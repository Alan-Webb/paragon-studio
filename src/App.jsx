import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Teachers from "./components/Teachers";

const App = () => {
	return (
		<main className="overflow-x-hidden antialiased text-black-900">
			<Navbar />
			<Hero />
			<Discover />
			<Teachers />
		</main>
	);
};

export default App;
