import SliderMain from './modules/sliders/sliderMain';
import SliderMini from './modules/sliders/sliderMini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
	const mainPageSlider = new SliderMain({ btns: '.next', container: '.page' });
	mainPageSlider.render();

	const modulePageSlider = new SliderMain({
		btns     : '.next',
		container: '.moduleapp',
	});
	modulePageSlider.render();

	const showUpSlider = new SliderMini({
		container  : '.showup__content-slider',
		prev       : '.showup__prev',
		next       : '.showup__next',
		activeClass: 'cart-active',
		animate    : true,
	});
	showUpSlider.init();

	const modulesSlider = new SliderMini({
		container  : '.modules__content-slider',
		prev       : '.modules__info-btns .slick-prev',
		next       : '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate    : true,
		autoplay   : true,
	});
	modulesSlider.init();

	const feedSlider = new SliderMini({
		container    : '.feed__slider',
		slideCSSClass: 'feed__item',
		prev         : '.feed__slider .slick-prev',
		next         : '.feed__slider .slick-next',
		activeClass  : 'feed__item-active',
	});
	feedSlider.init();

	new VideoPlayer('.showup .play', '.overlay').init();
	new VideoPlayer('.module__video-item .play', '.overlay').init();

	new Difference('.officerold	', '.officernew', '.officer__card-item').init();

	new Forms('.form').init();

	new ShowInfo('.plus__content').init();

	new Download('.download').init();
});
