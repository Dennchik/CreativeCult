import swiperLayout from "../assets/swiper-layout";
swiperLayout('.holding-slide__item');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';

//* import styles bundle 
export default function holdingSlide(
	mainslide = '.holding-slide__item',
) {
	if (mainslide) {
		new Swiper(mainslide, {
			slidesPerView: 4,
			spaceBetween: 8,
			grabCursor: true,
			speed: 500,
			freeMode: true,
			navigation: {
				nextEl: '.holding-btn-next',
				prevEl: '.holding-btn-prew',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				860: {
					slidesPerView: 4,
				}
			}
		});
	}
}




