import SwiperCore, {Autoplay} from 'swiper'

SwiperCore.use([Autoplay])


export const brandSliderConfig = {
    loop: true,
    slidesPerView: 5,
    grabCursor: true,
    speed: 5000,
    modules: [Autoplay],
    autoplay: {
        delay: 1,
    }
}
