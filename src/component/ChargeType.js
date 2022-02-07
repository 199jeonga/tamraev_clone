import React from 'react';

function ChargeType() {
  return <div className="charge_type handle_checkbox">
      <span>충전 타입</span>
              <ul>
              <li>
                  <input type="checkbox" id="charge_type_all" name="charge__type__all" value="전체" className='blind' />
                  <label for="charge_type_all"><i></i><span>전체</span></label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_dcCombo" name="charge__type__dcCombo" value="DC콤보" className='blind'/>
                  <label for="charge_type_dcCombo"><i></i><span>DC 콤보</span></label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_dcChademo" name="charge__type__dcChademo" value="DC차데모" className='blind'/>
                  <label for="charge_type_dcChademo"><i></i><span>DC차 데모</span></label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_ac3" name="charge__type__ac3" value="AC3상" className='blind'/>
                  <label for="charge_type_ac3"><i></i><span>AC 3상</span></label>
                </li>
                <li>
                  <input type="checkbox" id="charge_type_slow" name="charge__type__slow" value="완속" className='blind'/>
                  <label for="charge_type_slow"><i></i><span>완속</span></label>
                </li>
              </ul>
  </div>;
}

export default ChargeType;
