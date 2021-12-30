export default class Slider {
	constructor({
		container = null,
		slideCSSClass = '',
		btns = null,
		next = null,
		prev = null,
		activeClass = '',
		animate = false,
		autoplay = false,
		autoplayInterval = 5000,
	} = {}) {
		this.container = document.querySelector(container);
		if (this.container) {
			this.slideCSSClass = slideCSSClass;
			this.slides = this.container.children;
			this.btns = document.querySelectorAll(btns);
			this.prev = document.querySelector(prev);
			this.next = document.querySelector(next);
			this.activeClass = activeClass;
			this.animate = animate;
			this.autoplay = autoplay;
			this.autoplayInterval = autoplayInterval;
			this.slideIndex = 0;
		}
	}
}
