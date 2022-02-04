import React from 'react';

function SearchState() {
  return <div className="search_state handle_checkbox">
      <span>운전 상태</span>
      <ul>
        <li>
          <input type="checkbox" id="search_state_available" name="search__statea_Available" value="사용가능" />
          <label for="search_state_available">사용가능</label>
        </li>
        <li>
          <input type="checkbox" id="search_state_inUse" name="search__state__inUse" value="사용중" />
          <label for="search_state_inUse">사용중</label>
        </li>
        <li>
          <input type="checkbox" id="search_state_cantUse" name="search__state__cantUse" value="사용불가" />
          <label for="search_state_cantUse">사용불가</label>
        </li>
      </ul>
  </div>;
}

export default SearchState;
