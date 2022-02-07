import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import '../style/Footer.scss';

export default function Footer(props) {
  const footList = [
    {content:"탐라는 전기차", linkTo:"/"},
    {content:"전기차 충전소 위치", linkTo:"electronicList"},
    {content:"jeju 전기차 관련 소식", linkTo:"noticeList"},
    {content:"이용약관", linkTo:"terms"},
    {content:"개인정보처리방침", linkTo:"privacy"},
  ]
  
  return (
    <footer id="footBox">
      <h2>
        <Link to="/">
          <img src="/img/logo.png" alt="탐라는 전기차" />
          <span className="blind">{props.heading}정보</span>
        </Link>
      </h2>
      <ul className="foot_area">
        {footList.map( (el, inx)=>{
            return (<li key={inx}>
              <NavLink to={el.linkTo}>{el.content}</NavLink>
            </li>)
          }) }
      </ul>
      <p className="copylight"><span className="capital">copyright</span> &copy; All rights <span className="capital">reserved.</span></p>
    </footer>
  )
}
