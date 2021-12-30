import Slider from './slider';

export default class sliderMain extends Slider {
	constructor(btns) {
		super(btns);
	}

	showSlides(n) {
		if (n > this.slides.length - 1) {
			this.slideIndex = 0;
		}

		if (n < 0) {
			this.slideIndex = this.slides.length + 1;
		}

		try {
			this.hanson.style.visibility = 'hidden';

			if (n === 2) {
				setTimeout(() => {
					this.hanson.style.visibility = 'visible';
					this.hanson.classList.add('animated', 'slideInUp');
				}, 3000);
			} else {
				this.hanson.style.visibility = 'hidden';
				this.hanson.classList.remove('slideInUp');
			}
		} catch (e) {}

		[...this.slides].forEach((slide) => {
			slide.style.display = 'none';
		});

		this.slides[this.slideIndex].style.display = 'block';
	}

	plusSlides(n) {
		this.showSlides((this.slideIndex += n));
	}

	bindTriggers() {
		this.btns.forEach((btn) => {
			btn.addEventListener('click', () => {
				this.plusSlides(1);
			});

			btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault();
				this.slideIndex = 0;
				this.showSlides(this.slideIndex);
			});
		});

		document.querySelectorAll('.prevmodule').forEach((item) => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(-1);
			});
		});
		document.querySelectorAll('.nextmodule').forEach((item) => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(1);
			});
		});
	}

	render() {
		if (this.container) {
			try {
				this.hanson = document.querySelector('.hanson');
			} catch (e) {}

			this.showSlides(this.slideIndex);
			this.bindTriggers()
		}
	}
}
