// Navbar scroll opacity and to-top button
document.addEventListener("DOMContentLoaded", userScroll);
document.querySelector("#to-top").addEventListener("click", scrollToTop);

function userScroll() {
	const navbar = document.querySelector(".navbar");
	const toTopBtn = document.querySelector("#to-top");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 100) {
			navbar.classList.add("navbar-opacity");
			toTopBtn.classList.add("show");
		} else {
			navbar.classList.remove("navbar-opacity");
			toTopBtn.classList.remove("show");
		}
	});
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Video Modal
const videoBtn = document.querySelector(".video-btn");
const videoModal = document.querySelector("#videoModal");
const video = document.querySelector("#video");

let videoSrc;

if (videoBtn !== null) {
	videoBtn.addEventListener("click", () => {
		videoSrc = videoBtn.getAttribute("data-bs-src");
	});
}

if (videoModal !== null) {
	videoModal.addEventListener("shown.bs.modal", () => {
		video.setAttribute(
			"src",
			videoSrc + "?autoplay=1;modestbranding=1;showInfo=0"
		);
	});
	videoModal.addEventListener("hide.bs.modal", () => {
		video.setAttribute("src", videoSrc);
	});
}
