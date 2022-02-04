import React from 'react';

function ChargeType() {
  return <div className="charge_type handle_checkbox">
      <span>충전 타입</span>
              <ul>
              <li>
                  <input type="checkbox" id="charge_type_all" name="charge__type__all" value="전체" />
                  <label for="charge_type_all">전체</label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_dcCombo" name="charge__type__dcCombo" value="DC콤보" />
                  <label for="charge_type_dcCombo">DC콤보</label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_dcChademo" name="charge__type__dcChademo" value="DC차데모" />
                  <label for="charge_type_dcChademo">DC차데모</label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_ac3" name="charge__type__ac3" value="AC3상" />
                  <label for="charge_type_ac3">AC3상</label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_slow" name="charge__type__slow" value="완속" />
                  <label for="charge_type_slow">완속</label>
                </li>
              </ul>
  </div>;
}

export default ChargeType;
