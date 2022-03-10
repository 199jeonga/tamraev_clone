import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
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

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <div id="viewBox">
      {/* <Swiper {...swiperParams} ref={setSwiper}> */}
      <Swiper
        className="view_img"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="li">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
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
