import React from 'react'

function InfoConBox() {
  return (
    <div id="infoBox">
      <div className="info_title_area">
        <p>세계 자연유산으로 지정된 제주는 국내에서 가장 쉽고 편하게 전기차를 이용해볼 수 있는 곳이죠.</p>
        <div className="img"><span className="blind">제주도에서 이용해볼 수 있는 전기차 이미지</span></div>
      </div>{/* info_title_area */}
      <div className="info_content_area">
        <p>
          하지만 막상 전기차를 렌트해서 이용하더라도 전기차만의 특성을 모르고 이용하거나 특별한 기능을 사용하지 못한다면 즐거운 여행 기간 동안 오히려 예상치 못한 어려움을 만날 수 있습니다.
          </p>
        <p>
          전기차를 이용한 제주도 여행이 더 즐겁고 편안할 수 있도록 전기차의 기본 특성부터 운행 팁, 충전 방법, 사고 시 대처 방법 등 전기차와 관련된 다양한 정보를 제공해 드립니다.
        </p>
        <ul className="info_content_icon">
          <li><span className="blind">전기차에 대한 정보</span></li>
          <li><span className="blind">전기차 운전 방법에 대한 정보</span></li>
          <li><span className="blind">전기차 충전소에 대한 위치 정보</span></li>
          <li><span className="blind">전기차 안전 정보</span></li>
        </ul>
        <span className='more_btn'>'탐라는 전기차'에서 준비한 꿀팁들로 전기차에 대해 간단하게 알아보며 더욱 더 즐거운 여행을 준비해볼까요?</span>
      </div>{/* info_content_area */}
    </div>
  )
}

export default InfoConBox
