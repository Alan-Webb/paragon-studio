import teacherImg1 from "../assets/teacherImg1.webp";
import teacherImg2 from "../assets/teacherImg2.webp";
import teacherImg3 from "../assets/teacherImg3.webp";
import teacherImg4 from "../assets/teacherImg4.webp";
import teacherImg5 from "../assets/teacherImg5.webp";
import teacherImg6 from "../assets/teacherImg6.webp";

import aboutImg1 from "../assets/aboutImg1.webp";
import aboutImg2 from "../assets/aboutImg2.webp";
import aboutImg3 from "../assets/aboutImg3.webp";

import discover1 from "../assets/discover1.webp";
import discover2 from "../assets/discover2.webp";
import discover3 from "../assets/discover3.webp";

import course1 from "../assets/course1.webp";
import course2 from "../assets/course2.webp";
import course3 from "../assets/course3.webp";

import teacher1 from "../assets/teacher1.webp";
import teacher2 from "../assets/teacher2.webp";
import teacher3 from "../assets/teacher3.webp";
import teacher4 from "../assets/teacher4.webp";
import teacher5 from "../assets/teacher5.webp";
import teacher6 from "../assets/teacher6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
	{name: "About", id: "about"},
	{name: "Discover", id: "discover"},
	{name: "Courses", id: "courses"},
	{name: "Pricing", id: "pricing"},
	{name: "Teachers", id: "teachers"},
	{name: "Testimonials", id: "testimonials"},
	{name: "FAQ", id: "faq"},
	{name: "Contact", id: "contact"},
];

export const HERO_IMAGES = [
	{image: teacherImg1, alt: "Paragon teacher Amy Van Halen", delay: 0.1},
	{image: teacherImg2, alt: "Paragon teacher Denzel James", delay: 0.2},
	{image: teacherImg3, alt: "Paragon teacher Kato Maeda", delay: 0.3},
	{image: teacherImg4, alt: "Paragon teacher Lillian Chen", delay: 0.4},
	{image: teacherImg5, alt: "Paragon teacher Barry West", delay: 0.5},
	{image: teacherImg6, alt: "Paragon teacher Yuiko Nakagawa", delay: 0.6},
];

export const ABOUT_CONTENT = {
	title: "Why Choose Us?",
	aboutImages: [
		{
			src: aboutImg1,
			alt: "Wushu training",
			delay: 0.1,
		},
		{
			src: aboutImg2,
			alt: "Karate training",
			delay: 0.2,
		},
		{
			src: aboutImg3,
			alt: "Traditional weapons training",
			delay: 0.3,
		},
	],
	aboutText:
		"Founded in 1993 by Sifu Amy Van Halen, our platform is built on over three decades of combined experience in martial arts education and training. We understand what it takes to master each technique, and our instructors bring a wealth of real-world knowledge to every lesson. With deep expertise across multiple disciplines our instructors deliver authentic, effective techniques. Each video is crafted to impart detailed insights and practical skills, empowering you with knowledge grounded in tradition and practice.",
};

export const DISCOVER_CONTENT = [
	{
		id: 1,
		title: "Skills",
		content: "Tailored strategies to meet your unique training needs.",
		description:
			"Our martial arts training videos provide an immersive learning experience that allows you to enhance your skills from anywhere, at your own pace. Each video is crafted by expert instructors to	guide you through essential techniques, drills, and strategies,	helping you build strength, precision, and confidence. Whether you're a beginner or an experienced martial artist, these videos	are designed to challenge you, improve your form, and deepen your understanding of martial arts principles.",
		imgSrc: discover1,
		alt: "Wushu student performing high kick",
	},
	{
		id: 2,
		title: "Expertise",
		content: "Get expert advice and insights to boost progress.",
		description:
			"Our martial arts training videos are led by expert	instructors with years of experience and proven track	records in various martial arts disciplines. Each instructor brings a wealth of knowledge and a deep understanding of	their craft, guiding you with clear demonstrations, and detailed explanations, expert tips. Their approach is not just about teaching techniques; it’s about helping you understand the 'why' behind every move, creating a learning experience that’s personal, motivational, and results-driven.",
		imgSrc: discover2,
		alt: "Karate student performing kata",
	},
	{
		id: 3,
		title: "Technique",
		content: "Optimize your training for maximum results.",
		description:
			"Our videos provide a comprehensive breakdown of martial arts techniques, allowing you to master both foundational and advanced skills. We go beyond surface-level instruction to offer step-by-step guidance, explaining each movement in precise detail. You’ll learn not just how to perform techniques, but also how to refine them, avoid common mistakes, and optimize your form. This depth of instruction makes complex skills easier to grasp, so you can build confidence as you progress.",
		imgSrc: discover3,
		alt: "Muay Thai student being drilled by instructor",
	},
];

export const COURSES = [
	{
		title: "Beginner Training",
		description: "Martial arts fundamentals",
		details:
			"Our beginner-level courses are designed to lay a strong foundation in martial arts for those with little to no prior experience. Students will be introduced to essential principles such as basic stances, footwork, and striking techniques across various disciplines including karate, kung fu, taekwondo, and boxing.",
		imageUrl: course1,
		specifics: {
			experience: "None",
			duration: "12 months",
			outcome: "Foundation",
		},
	},
	{
		title: "Intermediate Training",
		description: "Specialization & conditioning",
		details:
			"Intermediate courses are tailored for students who have mastered the basics and are ready to deepen their skills. These lessons explore more dynamic combinations, advanced footwork, and defensive maneuvers such as blocks, parries, and counters. Students will also begin learning sparring strategies, joint locks, throws, and practical applications of techniques in realistic scenarios.",
		imageUrl: course2,
		specifics: {
			experience: "12 months",
			duration: "24 months",
			outcome: "Specialization",
		},
	},
	{
		title: "Advanced Training",
		description: "Become expert",
		details:
			"Advanced courses are built for dedicated martial artists looking to push their limits and achieve mastery. These in-depth training modules cover high-level techniques, tactical sparring drills, weapon forms, and advanced forms (kata or taolu) specific to each martial art. Students will work on speed, power generation, fluid transitions, and mental focus, often incorporating real-world self-defense simulations.",
		imageUrl: course3,
		specifics: {
			experience: "36 months",
			duration: "12 months",
			outcome: "Expertise",
		},
	},
];

export const PACKAGES = [
	{
		name: "Premium",
		price: "€14.99/pcm",
		description:
			"This premium package offers unlimited access to all resources.",
		services: [
			"Unlimited access to all videos",
			"Comprehensive one-on-one teacher time across all martial skills",
			"Daily webinars",
			"24/7 teacher support",
		],
	},
	{
		name: "Standard",
		price: "€6.99/pcm",
		description:
			"Standard package includes access to one chosen specialization.",
		services: [
			"Full access to chosen one martial art",
			"One-on-one sessions with that styles teacher",
			"Access to all channels on community Discord",
			"Weekly webinars",
		],
	},
	{
		name: "Basic",
		price: "€2.99/pcm",
		description:
			"This package is best suited for novice practitioners or complete beginners.",
		services: [
			"Full access for one beginner level style",
			"Basic teacher support",
			"Access to selected channels on community Discord",
			"Monthly webinars",
		],
	},
];

export const TEACHER_PROFILES = [
	{
		name: "Lillian Chen",
		description: "Kung-fu and tai chi",
		image: teacher1,
	},
	{
		name: "Amy Van Halen",
		description: "Wushu and Chinese boxing.",
		image: teacher2,
	},
	{
		name: "Denzel James",
		description: "Taekwondo and boxing.",
		image: teacher3,
	},
	{
		name: "Kato Maeda",
		description: "Karate and Ju-jutsu. ",
		image: teacher4,
	},
	{
		name: "Barry West",
		description: "Muay Thai and kickboxing.",
		image: teacher5,
	},
	{
		name: "Yuiko Nakagawa",
		description: "kendo, Iaido, and traditional weaponry.",
		image: teacher6,
	},
];

export const TESTIMONIALS = [
	{
		text: "Paragon Studio has completely changed the way I train. I’ve been practicing Muay Thai for years, but Barry West’s breakdowns took my technique to another level. The platform is super user-friendly, and I love being able to train at my own pace, anytime, anywhere.",
		author: "Jason M",
		location: "Colorado Springs, CO",
		bgColor: "bg-purple-100",
		textColor: "text-purple-800",
		image: user1,
	},
	{
		text: "I joined Paragon Studio to reconnect with my cultural roots through Tai Chi, and it has been such a meaningful journey. Sifu Chen’s guidance has helped me improve my flow, breathing, and focus. It’s more than just martial arts—it’s mindfulness in motion.",
		author: "Mei-Lin T",
		location: "Vancouver, BC",
		bgColor: "bg-green-100",
		textColor: "text-green-800",
		image: user2,
	},
	{
		text: "What stands out about Paragon Studio is the structure, and the practical application segments are brilliant. I’ve been learning karate under Sensei Maeda, and his clear explanations and real-life scenarios make everything click.",
		author: "Chris D",
		location: "Manchester, UK",
		bgColor: "bg-blue-100",
		textColor: "text-blue-800",
		image: user3,
	},
	{
		text: "As a complete beginner, I was nervous about starting martial arts. But Paragon Studio made it easy and welcoming. Amy Van Halen’s Wushu lessons are inspiring—she makes even complex movements approachable. I’ve gained strength, confidence, and a new passion I didn’t expect!",
		author: "Ava S",
		location: "Austin, TX",
		bgColor: "bg-yellow-100",
		textColor: "text-yellow-800",
		image: user4,
	},
	{
		text: "I travel constantly for work, so consistency in training was always a challenge. Paragon solved that for me. Whether I’m in a hotel or at home, I can keep training. Denzel James' boxing and taekwondo sessions are no-nonsense and energizing. The flexibility is a game-changer.",
		author: "Eric J",
		location: "Sydney, Australia",
		bgColor: "bg-pink-100",
		textColor: "text-pink-800",
		image: user5,
	},
	{
		text: "I was so thrilled to find a platform that teaches traditional Japanese weapons arts, and in such depth and detail. Sensei Nakagawa’s lessons are beautifully filmed and deeply authentic. Paragon honors traditions while making them accessible to modern learners.",
		author: "Naomi H",
		location: "Tokyo, Japan",
		bgColor: "bg-red-100",
		textColor: "text-red-800",
		image: user6,
	},
];

export const FAQ_DESCRIPTION =
	"Explore quick answers to common queries in our FAQ section. Whether it's about our services, policies, or more, find the information you need. Need further assistance? Contact our customer support for personalized help!";

export const FAQS = [
	{
		question: "What martial arts styles do your courses cover?",
		answer:
			"We offer a wide range of styles including kung fu, tai chi, wushu, Chinese boxing, taekwondo, boxing, karate, judo, ju-jitsu, muay thai, kickboxing, kendo, iaido, and Japanese weapons training.",
	},
	{
		question: "Are your instructors qualified?",
		answer:
			"Yes, all of our instructors are highly experienced professionals with years of teaching and competition experience in their respective disciplines.",
	},
	{
		question: "What equipment do I need?",
		answer:
			"For most beginner courses, no special equipment is required—just comfortable workout clothing and a safe space to practice. Advanced courses may suggest basic gear or training weapons.",
	},
	{
		question: "Will I earn a certificate after completing a course?",
		answer:
			"Yes, you will receive a digital certificate of completion after finishing each course, which you can download and share.",
	},
	{
		question: "How do I know which level is right for me?",
		answer:
			"We offer a course placement guide to help you assess your current skill level. If you're unsure, starting with a beginner course is always a safe option.",
	},
	{
		question: " Can I cancel or pause my membership?",
		answer:
			"Yes, you can cancel or pause your subscription at any time through your account dashboard—no questions asked.",
	},
];
