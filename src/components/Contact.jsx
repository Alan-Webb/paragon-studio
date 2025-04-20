import emailjs from "@emailjs/browser";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {FiSend} from "react-icons/fi";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const [isSending, setIsSending] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		let errors = {};
		if (!formData.name) errors.name = "Please enter your name";
		if (!formData.email) {
			errors.email = "Please enter your email";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Please enter a valid email address";
		}
		if (!formData.message) errors.message = "Please enter a message";
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			isSending(true);

			emailjs
				.send(
					"service_etqdslp",
					"template_5k8z1qm",
					formData,
					"6q1bs_-46t8jkufU1"
				)
				.then(() => {
					toast.success("Message sent successfully");
					setFormData({name: "", email: "", message: ""});
				})
				.catch(() => {
					toast.error("Failed to send message. Please try again.");
				})
				.finally(() => {
					setIsSending(false);
				});
		}
	};

	return (
		<section className="bg-stone-50 p-4" id="contact">
			<Toaster />
			<h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
				Contact Us
			</h2>
			<form onSubmit={handleSubmit} className="mx-auto mb-20 lg:max-w-3xl">
				<div className="mb-4 flex space-x-4">
					{/* Name Input */}
					<div className="lg:w-1/2">
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							placeholder="Name"
							onChange={handleChange}
							className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
						/>
						{errors.name && (
							<p className="text-sm text-rose-800">{errors.name}</p>
						)}
					</div>
					{/* Email Input */}
					<div className="lg:w-1/2">
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							placeholder="Email"
							onChange={handleChange}
							className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
						/>
						{errors.email && (
							<p className="text-sm text-rose-800">{errors.email}</p>
						)}
					</div>
				</div>
				{/* Message Area */}
				<div className="mb-4">
					<textarea
						id="message"
						name="message"
						value={formData.message}
						placeholder="Enter your message here"
						onChange={handleChange}
						className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
						rows="6"
					/>
					{errors.message && (
						<p className="text-sm text-rose-800">{errors.message}</p>
					)}
				</div>
				<button
					type="submit"
					className={`mb-8 w-full rounded-xl border bg-emerald-950 px-4 py-2 text-sm font-semibold text-orange-50 hover:bg-emerald-900 cursor-pointer ${
						isSending ? "cursor-not-allowed opacity-50" : ""
					}`}
					disabled={isSending}>
					<div className="flex items-center justify-center gap-2">
						{isSending ? "Sending..." : "Submit"}
						<FiSend />
					</div>
				</button>
			</form>
		</section>
	);
};

export default Contact;
