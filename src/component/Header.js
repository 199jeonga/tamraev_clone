import Nvigation from './navigation';
import '../style/Header.scss';
import {Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';

import React from 'react'

export default function Header(props) {
  return (
    <header id="headBox">
      <div className="head_area">
        <h1><Link to="/"><span className="blind">{props.heading}</span></Link></h1>
        <button type="button"><span className="blind">메뉴열기</span><i><BiMenu /></i></button>
      </div>
      <Nvigation />
    </header>
  )
}
