import React from 'react'
import {NavLink} from 'react-router-dom';

export default function navigation(props) {
  const gnbList = [
  {content:"main", linkTo:"/"},
  {content:"Info", linkTo:"info"},
  {content:"ElectronicList", linkTo:"electroniclist"},
  {content:"NoticeList", linkTo:"noticelist"}
  ]
  return (
    <nav id="gnbBox">
      <h2>{props.heading}메뉴</h2>
      <div class="gnb_area">
        <ul>
          {
            gnbList.map( (el, idx)=>{
              return (
                <li key={idx}><NavLink to={el.linkTo}>
                  {el.content}
                </NavLink></li>
              )
            })
          }
        </ul>
      </div>

    </nav>
  )
}
