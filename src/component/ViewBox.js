import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../style/viewBox.scss";
import ViewBoxContent from "./ViewBoxContent.js";

export default function ViewBox() {
  const [conData, setData] = useState([]);
  useEffect(() => {
    axios.get("./data/viewList.json").then((res) => setData(res.data));
  }, []);
  console.log(conData);

  const activeStyle = {
    zIndex: `${1 * -100}%`,
  };

  return (
    <div id="viewBox">
      <ul className="view_img">
        {conData.map((data, i) => (
          <ViewBoxContent key={i} data={data} />
        ))}
      </ul>
      <div className="view_area">
        <dl className="view_text">
          <dt>탐라는 전기차</dt>
          <dd>
            전기차와 함께 제주 여행을 준비하는 당신에게 필요한 모든 정보와 꿀팁!
          </dd>
        </dl>
        <ul className="view_indicator">
          <li className="active">
            <span className="blind">첫번째 이미지 보기</span>
          </li>
          <li>
            <span className="blind">두번째 이미지 보기</span>
          </li>
          <li>
            <span className="blind">세번째 이미지 보기</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
