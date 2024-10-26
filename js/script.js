// Navbar scroll effect
function userScroll() {
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("navbar-opacity");
		} else {
			navbar.classList.remove("navbar-opacity");
		}
	});
}

document.addEventListener("DOMContentLoaded", userScroll);
