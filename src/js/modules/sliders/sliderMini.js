import Slider from './slider';

export default class SliderMini extends Slider {
	constructor(
		container,
		slideCSSClass,
		next,
		prev,
		activeClass,
		animate,
		autoplay,
		autoplayInterval
	) {
		super(
			container,
			slideCSSClass,
			next,
			prev,
			activeClass,
			animate,
			autoplay,
			autoplayInterval
		);
		if (this.autoplay) this.timer;
	}

	checkSlide(elems, direction = 'NEXT') {
		if (direction == 'NEXT') {
			for (let i = 0; i < elems.length; i++) {
				if (elems[0] && !elems[0].classList.contains(this.slideCSSClass)) {
					this.container.appendChild(elems[0]);
				} else break;
			}
		} else {
			for (let i = elems.length; i > 0; i--) {
				const elem = elems[elems.length - 1];
				if (elem && !elem.classList.contains(this.slideCSSClass)) {
					this.container.insertBefore(elem, elems[0]);
				} else break;
			}
		}
	}

	nextSlide() {
		this.container.appendChild(this.slides[0]);
		if (this.slideCSSClass) this.checkSlide(this.slides, 'NEXT');
		this.decorizeSlides();
	}
	prevSlide() {
		if (this.slideCSSClass) this.checkSlide(this.slides, 'PREV');
		const active = this.slides[this.slides.length - 1];
		this.container.insertBefore(active, this.slides[0]);
		this.decorizeSlides();
	}

	decorizeSlides() {
		[...this.slides].forEach((slide) => {
			slide.classList.remove(this.activeClass);
			if (this.animate) {
				slide.querySelector('.card__title').style.opacity = '0.4';
				slide.querySelector('.card__controls-arrow').style.opacity = '0';
			}
		});

		this.slides[0].classList.add(this.activeClass);
		if (this.animate) {
			this.slides[0].querySelector('.card__title').style.opacity = '1';
			this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
		}
	}

	startAutoplay(interval) {
		this.timer = setInterval(() => this.nextSlide(), interval);
	}
	stopAutoplay() {
		clearInterval(this.timer);
	}

	bindTriggers() {
		this.next.addEventListener('click', () => this.nextSlide());
		this.prev.addEventListener('click', () => this.prevSlide());

		if (this.autoplay) {
			[this.next, this.prev, this.container].forEach((argument) => {
				argument.addEventListener('mouseover', () => {
					this.stopAutoplay();
				});
			});

			[this.next, this.prev, this.container].forEach((argument) => {
				argument.addEventListener('mouseleave', () => {
					this.startAutoplay(this.autoplayInterval);
				});
			});
		}
	}

	init() {
		if (this.container) {
			this.container.style.cssText = `
				display: flex;
				flex-wrap: wrap;
				overflow: hidden;
				align-items: flex-start;
			`;

			this.bindTriggers();
			this.decorizeSlides();

			if (this.autoplay) {
				this.startAutoplay(this.autoplayInterval);
			}
		}
	}
}
