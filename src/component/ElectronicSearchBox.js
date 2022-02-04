import React from 'react'
import '../style/ElectronicchargeBox.scss';
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
          <fieldset className='el_search_part'>
            <input id="el_search_input" placeholder='위치 검색하기'/>
            <button type="button" className='search_btn'><BsSearch /><span className='blind'>검색하기</span></button>
            <button type="button" className='gps_btn'><MdGpsFixed /><span className='blind'>내 위치 확인에 대한 권한 요청기</span></button>
          </fieldset>
          <fieldset>
              <SearchState />
              <ChargeType />
          </fieldset>

        </form>
      </div>
    </div>
  )
}

export default ElectronicSearchBox
