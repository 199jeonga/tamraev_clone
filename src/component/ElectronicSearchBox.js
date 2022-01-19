import React from 'react'
import '../style/ElectronicSearchBox.scss';

function ElectronicSearchBox() {
  return (
    <div id="electronicSearchBox sub_title">
      <h2>전기차 충전소 위치를 확인하세요!</h2>
      <p>제주도 어디서든 충전이 필요할 땐 내 위치에서 가장 가까운 충전소를 확인하세요.</p>
      <div className="el_search_area">
        <form>
          <fieldset>
            <input id="el_search_input" />

          </fieldset>
        </form>
        <div className="handle_checkbox">
          <span>운전 상태</span>
        </div>
        <div className="handle_checkbox"></div>
      </div>
    </div>
  )
}

export default ElectronicSearchBox
