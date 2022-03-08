import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import axios from "axios";
import "../style/viewBox.scss";
import ViewBoxContent from "./ViewBoxContent.js";
import "swiper/css"; //basic
import "swiper/css/pagination";

export default function ViewBox() {
  const [conData, setData] = useState([]);
  useEffect(() => {
    axios.get("./data/viewList.json").then((res) => setData(res.data));
  }, []);

  SwiperCore.use([Pagination, Navigation]);
  const [swiper, setSwiper] = useState(null);

  const viewList = {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "510px",
  };
  const swiperParams = {
    Pagination: true,
    onSwiper: setSwiper,
  };

  return (
    <div id="viewBox">
      <Swiper
        style={viewList}
        {...swiperParams}
        ref={setSwiper}
        Navigation
        Autoplay
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        ...
      </Swiper>
      {/* <ul className="view_img">
        {conData.map((data, i) => (
          <ViewBoxContent key={i} data={data} />
        ))}
      </ul> */}
      <div className="view_area">
        <dl className="view_text">
          <dt>탐라는 전기차</dt>
          <dd>
            전기차와 함께 제주 여행을 준비하는 당신에게 필요한 모든 정보와 꿀팁!
          </dd>
        </dl>
        <ul className="view_indicator">
          {conData.map((data, i) => (
            <li key={i}>
              <span className="blind">{data.indicator}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
