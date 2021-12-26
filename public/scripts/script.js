var navbar = document.querySelector('.navbar');
var cover = document.querySelector('.cover');

var options = {
	rootMargin: '-64px 0px 0px 0px',
};

var intersection = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (e.isIntersecting) {
			if (navbar.classList.contains('out-cover')) {
				navbar.classList.remove('out-cover');
			}
		} else {
			if (!navbar.classList.contains('out-cover')) {
				navbar.classList.add('out-cover');
			}
		}
	});
}, options);

intersection.observe(cover);
