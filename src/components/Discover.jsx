import {useState} from "react";
import {DISCOVER_CONTENT} from "../constants";

const Discover = () => {
	const [activeTab, setActiveTab] = useState(DISCOVER_CONTENT[0]);

	return (
		<section className="bg-stone-50 p-6 text-emerald-950" id="discover">
			<div className="container mx-auto mb-20">
				<h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
					Discover
				</h2>
				<div className="flex items-center justify-center space-x-4">
					{DISCOVER_CONTENT.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab)}
							className={`px-4 py-2 font-semibold tracking-tighter transition-colors lg:text-2xl cursor-pointer ${
								activeTab.id === tab.id
									? "border-b-2 border-orange-50 text-orange-500"
									: "text-emerald-950"
							}`}>
							{tab.title}
						</button>
					))}
				</div>
				<div
					key={activeTab.id}
					className="mt-8 flex flex-col items-center lg:flex-row">
					<div className="p-4 lg:w-1/2">
						<h2 className="mb-4 text-3xl lg:text-4xl">{activeTab.content}</h2>
						<p className="text-lg tracking-tighter text-emerald-950 lg:text-2xl">
							{activeTab.description}
						</p>
					</div>
					<div className="p-4 lg:w-1/2">
						<img
							src={activeTab.imgSrc}
							alt={activeTab.title}
							className="h-auto w-full rounded-lg border border-emerald-950"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discover;
