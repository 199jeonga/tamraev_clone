import Nvigation from './navigation';
import '../style/Header.scss';
import {Link} from 'react-router-dom';
// import {BiMenu} from 'react-icons/bi';

import React from 'react'

export default function Header(props) {
  return (
    <header id="headBox">
      <div className="head_area">
        <h1><Link to="/"><span className="blind">{props.heading}</span></Link></h1>
        <div class="gnb_btn">
          <button type="button">
            <i className="nav_bar"></i><span className="blind">메뉴열기</span>
          </button>
          </div>
      </div>
      <Nvigation />
    </header>
  )
}
