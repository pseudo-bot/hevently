let navBg = document.querySelector('.navbar-bg');
let cover = document.querySelector('.cover');

let options = {
	rootMargin: "-64px 0px 0px 0px"
};

let intersection = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (e.isIntersecting) {
			navBg.classList.add('trans-navbg');
		} else {
			navBg.classList.remove('trans-navbg');
		}
	});
}, options);

intersection.observe(cover)

// Parallax 

window.addEventListener('scroll', () => {
	let offset = window.scrollY;
	cover.style.backgroundPositionY = -offset * 0.4 + "px";
})
