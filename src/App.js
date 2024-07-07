import logo from './logo.svg';
import './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Mousewheel} from "swiper/modules";

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
                    <div className={'box'}>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>

                    <Swiper
                        className={"inner-swiper"}
                        modules={[Autoplay, FreeMode]}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        freeMode={true}
                        slidesPerView={"auto"}
                        spaceBetween={16}
                        loop={true}
                        loopAdditionalSlides={1}
                        speed={3000}
                        cssMode={true}
                        loopAddBlankSlides={true}
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
                        <SwiperSlide className={"inner-slide"}>
                            <p>44</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>55</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>66</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>77</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>88</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>99</p>
                        </SwiperSlide>
                        <SwiperSlide className={"inner-slide"}>
                            <p>10</p>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}

export default App;
