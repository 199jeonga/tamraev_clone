import React from 'react'
import '../style/ElectronicSearchBox.scss';
import '../style/total.scss';

import {BsSearch} from 'react-icons/bs';
import {MdGpsFixed} from 'react-icons/md';

import SearchState from '../component/SearchState';
import ChargeType from '../component/ChargeType';


function ElectronicSearchBox() {
  return (
    <div id="electronicSearchBox" className="subTitle">
      <h2>전기차 충전소 위치를 확인하세요!</h2>
      <p>제주도 어디서든 충전이 필요할 땐 내 위치에서 가장 가까운 충전소를 확인하세요.</p>
      <div className="el_search_area">
        <form>
          <fieldset>
            <input id="el_search_input" />
            <button type="button"><BsSearch /><span className='blind'>검색하기</span></button>
            <button type="button"><MdGpsFixed /><span className='blind'>내 위치 확인에 대한 권한 요청기</span></button>

            <div className="search_state handle_checkbox">
              <SearchState />
            </div>
            <div className="charge_type handle_checkbox">
              <ChargeType />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default ElectronicSearchBox
