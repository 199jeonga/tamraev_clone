import React from 'react';

function SearchState() {
  return <div className="search_state handle_checkbox">
      <span>운전 상태</span>
      <ul>
        <li>
          <input type="checkbox" id="search_state_available" name="search__statea_Available" value="사용가능" className='blind'/>
          <label for="search_state_available">
            <i></i>
            <img src='img/icon_charging_on.png' alt="사용가능한 충전소 위치 확인" />
            <span>사용가능</span>
            </label>
        </li>
        <li>
          <input type="checkbox" id="search_state_inUse" name="search__state__inUse" value="사용중" className='blind'/>
          <label for="search_state_inUse">
            <i></i>
            <img src='img/icon_charging_ing.png' alt="사용중인 충전소 위치 확인" />
            <span>사용중</span>
            </label>
        </li>
        <li>
          <input type="checkbox" id="search_state_cantUse" name="search__state__cantUse" value="사용불가" className='blind'/>
          <label for="search_state_cantUse">
            <i></i>
            <img src='img/icon_charging_off.png' alt="사용불가능한 충전소 위치 확인" />
            <span>사용불가</span>
            </label>
        </li>
      </ul>
  </div>;
}

export default SearchState;
