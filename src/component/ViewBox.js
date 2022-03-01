import React, { useState, useEffect, useRef } from "react";
import "../style/viewBox.scss";

export default function ViewBox() {
  const listData = [
    "제주도에서 렌트가 가능한 전기차 이미지1",
    "제주도에서 렌트가 가능한 전기차 이미지2",
    "제주도에서 렌트가 가능한 전기차 이미지3",
  ];
  listData.unshift(listData[listData.length - 1]);

  return (
    <div id="viewBox">
      <ul className="view_img">
        <li>
          <span className="blind">제주도에서 렌트가 가능한 전기차 이미지3</span>
        </li>
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
