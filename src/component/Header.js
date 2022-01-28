import Nvigation from './navigation';
import '../style/Header.scss';

import {Link} from 'react-router-dom';
import React,{ useState }from 'react'


export default function Header(props) {

  const [checkState, setCheckState] = useState(false);
  const fnCheck = ()=>{
    setCheckState(!checkState);
  };

  return (
    <header id="headBox">
      <div className="head_area">
        <h1><Link to="/"><span className="blind">{props.heading}</span></Link></h1>
        <div class={checkState ? 'gnb_btn active' : 'gnb_btn'} onClick={ fnCheck } >
          <button type="button">
            <i className="nav_bar"></i><span className="blind">메뉴열기</span>
          </button>
          </div>
      </div>
      <nav className={checkState ? "gnbBox active" : "gnbBox"}>
        <Nvigation />
      </nav>
    </header>
  )
}
