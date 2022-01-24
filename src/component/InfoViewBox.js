import React from 'react';
import '../style/total.scss';
import '../style/infoViewBox.scss';

function InfoViewBox() {
  return (
    <div id="infoViewBox" className="subTitle">
      <h2>탐라는 전기차<span className="blind">홈페이지 소개</span></h2>
      <p>전기차 이용법부터 알찬꿀팁까지 모두 알려드려요!</p>
      <div className="img"><span className="blind">제주도에서 사용가능한 전기차 이미지</span></div>
    </div>
  )
}

export default InfoViewBox
