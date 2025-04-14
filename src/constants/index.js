import hero from "../assets/hero.jpg";

import discover1 from "../assets/discover-1.jpg";
import discover2 from "../assets/discover-2.jpg";
import discover3 from "../assets/discover-3.jpg";

import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";
import teacher5 from "../assets/teacher5.jpg";
import teacher6 from "../assets/teacher6.jpg";

import aboutImage from "../assets/about.jpg";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

export const LINKS = [
	{ name: "About", id: "about" },
  { name: "Discover", id: "discover" },
  { name: "Projects", id: "projects" },
  { name: "Pricing", id: "pricing" },
  { name: "Teachers", id: "teachers" },
  { name: "Reviews", id: "reviews" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export const HERO_CONTENT = {
	title: "Paragon Studio",
	subtitle:
		"Explore our training videos and master every move in your own time",
	image: hero,
};

export const DISCOVER_CONTENT = [
	{
		title: "Enhance Your Skills",
		description:
			"Our martial arts training videos provide an immersive learning experience that allows you to enhance your skills from anywhere, at your own pace. Each video is crafted by expert instructors to	guide you through essential techniques, drills, and strategies,	helping you build strength, precision, and confidence. Whether you're a beginner or an experienced martial artist, these videos	are designed to challenge you, improve your form, and deepen your understanding of martial arts principles.",
		image: discover1,
		alt: "Wushu student performing high kick",
	},
	{
		title: "Expert Instructors",
		description:
			"Our martial arts training videos are led by expert	instructors with years of experience and proven track	records in various martial arts disciplines. Each instructor brings a wealth of knowledge and a deep understanding of	their craft, guiding you with clear demonstrations, and detailed explanations, expert tips. Their approach is not just about teaching techniques; it’s about helping you understand the 'why' behind every move, creating a learning experience that’s personal, motivational, and results-driven. By training with top-tier instructors, you gain direct access to their insights and skills, helping you reach your goals faster and more effectively.",
		image: discover2,
		alt: "Karate student performing kata",
	},
	{
		title: "In-depth Technical Break-down",
		description:
			"Our videos provide a comprehensive breakdown of martial arts techniques, allowing you to master both foundational and advanced skills. We go beyond surface-level instruction to offer step-by-step guidance, explaining each movement in precise detail. You’ll learn not just how to perform techniques, but also how to refine them, avoid common mistakes, and optimize your form. This depth of instruction makes complex skills easier to grasp, so you can build confidence as you progress. Whether you’re focusing on striking, footwork, or defense, our technical breakdowns help you advance with clarity and precision.",
		image: discover3,
		alt: "Muay Thai student being drilled by instructor",
	},
];

export const TEACHER_PROFILES = [
	{
		id: 1,
		name: "Lillian Chen",
		description:
			"Lillian Chen is a highly respected martial artist specializing in kung-fu and tai chi, with a profound understanding of both the external and internal aspects of these ancient arts. With over four decades of experience, she brings a unique blend of strength, precision, and fluidity to her teachings, guiding students through complex forms, breathing techniques, and energy work.",
		image: teacher1,
		link: "#",
	},
	{
		id: 2,
		name: "Amy Van Halen",
		description:
			"Amy Van Halen is an energetic and skilled martial artist specializing in wushu and Chinese boxing. With her background in the acrobatic techniques of wushu and the powerful strikes of Chinese boxing, Amy brings a dynamic and captivating style to her training sessions. Known for her precision and athleticism, she excels at teaching complex forms, powerful strikes, and the agility that defines these arts.",
		image: teacher2,
		link: "#",
	},
	{
		id: 3,
		name: "Denzel James",
		description:
			"Denzel James is a skilled taekwondo and boxing instructor renowned for his focus on power, speed, and strategic movement. With his unique blend of taekwondo’s high-flying kicks and boxing’s precise punches, Denzel brings versatile and highly effective approach to martial arts training. His teaching emphasizes balance, agility, and tactical awareness, helping students develop not only physical skills but also a keen sense of timing and distance.",
		image: teacher3,
		link: "#",
	},
	{
		id: 4,
		name: "Kato Maeda",
		description:
			"Kato Maeda is a dedicated martial artist specializing in karate and ju-jutsu, known for his disciplined approach and in-depth understanding of both striking and grappling techniques. With years of experience, Kato combines the powerful, precise strikes of karate with the fluid, effective grappling techniques of ju-jitsu to teach a well-rounded martial arts skill set. His instruction 	emphasizes proper form, control, and practical application, helping students build a foundation that is both technically strong and adaptable.",
		image: teacher4,
		link: "#",
	},
	{
		id: 5,
		name: "Barry West",
		description:
			"Barry West is a seasoned Muay Thai and kickboxing specialist, known for his intense, high-energy training style and deep knowledge of striking arts. With extensive experience in both disciplines, Barry combines the powerful, close-range strikes of Muay Thai with the dynamic footwork and rapid combinations of kickboxing. His teaching emphasizes strength, endurance, and technique, helping students build a strong foundation in both offense and defense.",
		image: teacher5,
		link: "#",
	},
	{
		id: 6,
		name: "Yuiko Nakagawa",
		description:
			"Yuiko Nakagawa is an accomplished martial artist specializing in kendo, Iaido, and traditional Japanese weaponry, bringing both skill and reverence to these centuries-old practices. With a deep understanding of swordsmanship and discipline, Yuiko teaches students the precise techniques and mindful focus required to master Japanese weapons arts.",
		image: teacher6,
		link: "#",
	},
];

export const ABOUT_CONTENT = {
	title: "Why Choose Us?",
	image: aboutImage,
	description:
		"Our platform is built on nearly three decades of combined experience in martial arts education and training. We understand what it takes to master each technique, and our instructors bring a wealth of real-world knowledge to every lesson. With deep expertise across multiple disciplines our instructors deliver authentic, effective techniques. Each video is crafted to impart detailed insights and practical skills, empowering you with knowledge grounded in tradition and practice.",
};

export const REVIEWS = {
	text: "Hear what our clients have to say about their experiences with Paragon Studio. We take pride in our work and are committed to delivering the best results to our students.",
	reviews: [
		{
			name: "Jason M",
			location: "Colorado Springs, CO",
			review:
				"Paragon Studio has completely changed the way I train. The expert instruction from real martial arts masters is unmatched. I’ve been practicing Muay Thai for years, but Barry West’s breakdowns took my technique to another level. The platform is super user-friendly, and I love being able to train at my own pace, anytime, anywhere.",
			image: user1,
		},
		{
			name: "Mei-Lin T",
			location: "Vancouver, BC",
			review:
				"I joined Paragon Studio to reconnect with my cultural roots through Tai Chi, and it has been such a meaningful journey. Lillian Chen’s teaching is both graceful and powerful. Her guidance has helped me improve my flow, breathing, and focus. It’s more than just martial arts—it’s mindfulness in motion. Highly recommend!",
			image: user2,
		},
		{
			name: "Chris D",
			location: "Manchester, UK",
			review:
				"What stands out about Paragon Studio is the structure. Each lesson builds progressively, and the practical application segments are brilliant. I’ve been learning karate under Kato Maeda, and his clear explanations and real-life scenarios make everything click. It’s the next best thing to having a private sensei.",
			image: user3,
		},
		{
			name: "Ava S",
			location: "Austin, TX",
			review:
				"As a complete beginner, I was nervous about starting martial arts. But Paragon Studio made it easy and welcoming. Amy Van Halen’s Wushu lessons are inspiring—she makes even complex movements approachable. I’ve gained strength, confidence, and a new passion I didn’t expect!",
			image: user4,
		},
		{
			name: "Eric J",
			location: "Sydney, Australia",
			review:
				"I travel constantly for work, so consistency in training was always a challenge. Paragon Studio solved that for me. Whether I’m in a hotel or at home, I can keep training with world-class instructors. Denzel James' boxing and taekwondo sessions are no-nonsense and energizing. The flexibility is a game-changer.",
			image: user5,
		},
		{
			name: "Naomi H",
			location: "Tokyo, Japan",
			review:
				"I was thrilled to find a platform that teaches traditional Japanese weapons arts in such depth. Yuiko Nakagawa’s kendo and iaido lessons are beautifully filmed and deeply authentic. Paragon Studio honors the traditions while making them accessible to modern learners. It’s like stepping into a virtual dojo.",
			image: user6,
		},
	],
};

export const CONTACT_INFO = {
	text: "Have questions or need more information? Get in touch with us, and one of our expert instructors will be happy to assist you.",
	phone: {
		label: "Phone",
		value: "(+44)  020 3966 6669",
	},
	email: {
		label: "Email",
		value: "paragonstudiotraining@gmail.com",
	},
	address: {
		label: "Address",
		value: "7 Torrens St, London EC1V 1NQ",
	},
};
