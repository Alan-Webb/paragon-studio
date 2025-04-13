import {FaFacebook, FaInstagramSquare} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
				<div className="flex space-x-6 mb-2">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit our Facebook page">
						<FaFacebook />
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit our Facebook page">
						<FaXTwitter />
					</a>
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit our Facebook page">
						<FaInstagramSquare />
					</a>
				</div>
				<p className="text-sm">
					&copy; 2025 Paragon Studio. All rights reserved
				</p>
			</div>
		</footer>
	);
};
export default Footer;
