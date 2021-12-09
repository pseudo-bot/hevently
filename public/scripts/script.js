var navBg = document.querySelector('.navbar-bg');
var cover = document.querySelector('.cover');

var options = {
	rootMargin: "-64px 0px 0px 0px"
};

var intersection = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (e.isIntersecting) {
			navBg.classList.add('trans-navbg');
		} else {
			navBg.classList.remove('trans-navbg');
		}
	});
}, options);

intersection.observe(cover)

