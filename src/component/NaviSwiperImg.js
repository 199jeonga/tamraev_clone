import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import axios from "axios";
import "swiper/css/effect-fade";

function NaviSwiperImg() {
  const [conData, setData] = useState([]);
  useEffect(() => {
    axios.get("./data/gnbList.json").then((res) => setData(res.data));
  }, []);
  SwiperCore.use([Autoplay, EffectFade]);
  // console.log(conData[1].alt);
  return (
    <Swiper
      module={{ Autoplay, EffectFade }}
      className="gnb_img"
      autoplay={{ delay: 2000 }}
      effect={"fade"}
      speed={2000}
    >
      {conData.map((el, i) => (
        <SwiperSlide key={i} style={{ backgroundImage: `url(${el.src})` }}>
          <span className="blind">{el.alt}</span>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
}

export default NaviSwiperImg;
