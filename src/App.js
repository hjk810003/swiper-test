import logo from './logo.svg';
import './App.css';
import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Mousewheel} from "swiper/modules";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Swiper
          direction={"vertical"}
          className={"fullpage-swiper"}
          module={[Mousewheel]}
          mousewheel={"true"}
          slidesPerView={"auto"}
      >
        <SwiperSlide className={"fullpage-slide fullpage-slide-1"}>
          1번 슬라이드
        </SwiperSlide>
        <SwiperSlide className={"fullpage-slide fullpage-slide-2"}>
          2번 슬라이드
        </SwiperSlide>
        <SwiperSlide className={"fullpage-slide fullpage-slide-3"}>
          3번 슬라이드
          <div className={'box'}>기이인 컨텐츠</div>

          <Swiper
              className={"inner-swiper"}
              module={[Autoplay, FreeMode]}
              autoplay={{
                  delay: 0,
                  disableOnInteraction: false
              }}
              freemode={"true"}
              slidesPerView={"auto"}
              spaceBetween={16}
              loop={"true"}
              speed={3000}
          >
            <SwiperSlide className={"inner-slide inner-slide-1"}>
                <p>11</p>
            </SwiperSlide>
              <SwiperSlide className={"inner-slide inner-slide-2"}>
                  <p>22</p>
              </SwiperSlide>
              <SwiperSlide className={"inner-slide inner-slide-3"}>
                  <p>33</p>
              </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
