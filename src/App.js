import './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

function App() {
    return (
        <div className="App">
            <header className="App-header" />
            <div className={'container'}>
                <Swiper
                    className={"fullpage-swiper"}
                    direction={'vertical'}
                    modules={[Mousewheel]}
                    mousewheel={true}
                    slidesPerView={'auto'}
                >
                    <SwiperSlide className={"fullpage-slide fullpage-slide-1"}>
                        1번 슬라이드
                    </SwiperSlide>
                    <SwiperSlide className={"fullpage-slide fullpage-slide-2"}>
                        2번 슬라이드
                    </SwiperSlide>
                    <SwiperSlide className={"fullpage-slide fullpage-slide-3"}>
                        3번 슬라이드
                        <Swiper
                            className={"inner-swiper"}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 0,
                            }}
                            speed={5000}
                            spaceBetween={16}
                            loop={true}
                            slidesPerView={'auto'}
                        >
                            <SwiperSlide className={"inner-slide"}>
                                <p>11</p>
                            </SwiperSlide>
                            <SwiperSlide className={"inner-slide"}>
                                <p>22</p>
                            </SwiperSlide>
                            <SwiperSlide className={"inner-slide"}>
                                <p>33</p>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default App;
