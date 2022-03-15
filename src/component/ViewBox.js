import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import axios from "axios";
import "../style/viewBox.scss";
import ViewBoxContent from "./ViewBoxContent.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ViewBox() {
  const [conData, setData] = useState([]);

  useEffect(() => {
    axios.get("./data/viewList.json").then((res) => setData(res.data));
  }, []);

  SwiperCore.use([Pagination, Autoplay, EffectFade]);

  return (
    <div id="viewBox">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        className="view_img"
        direction={"vertical"}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        effect={"fade"}
        wrapperTag="ul"
      >
        {conData.map((i, el) => {
          return (
            <SwiperSlide
              tag="li"
              key={el}
              style={{
                backgroundImage: `url(${i.src})`,
              }}
            >
              <ViewBoxContent data={i} />
            </SwiperSlide>
          );
        })}
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
      </div>
    </div>
  );
}
