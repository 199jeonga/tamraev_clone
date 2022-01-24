import React from 'react'
import '../style/electronicMapBox.scss';

function ElectronicMapBox() {
  return (
    <div id="electronicMapBox">
      <span>&#42; 거리순</span>
      <div className="el_map_area">
        <div className="list_inner"></div>
        <div className="map_inner"></div>
      </div>
      <p className='el_map_text'>
      <strong>※ 환경부 운영기관 충전소 기준</strong> <br />
      ※ 본 사이트는 제주도 위치 기준 전기차 충전소만 안내하오니 참고 바랍니다.
      </p>
    </div>
  )
}

export default ElectronicMapBox
