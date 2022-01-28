import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom';
import '../style/navigation.scss';

export default function navigation(props) {
  const gnbList = [
  {content:"home", linkTo:"/"},
  {content:"탐라는 전기차", linkTo:"info"},
  {content:"전기차 충전소 위치", linkTo:"electroniclist"},
  {content:"jeju 전기차 관련 소식", linkTo:"noticelist"}
  ]
  return (
    <Fragment>
      <h2 className='blind'>{props.heading}메뉴</h2>
      <div className="gnb_area">
        <ul className='gnb_img'>
          <li><span className='blind'>제주도에서 사용 가능한 전기차 이미지1</span></li>
          <li><span className='blind'>제주도에서 사용 가능한 전기차 이미지2</span></li>
          <li><span className='blind'>제주도에서 사용 가능한 전기차 이미지3</span></li>
        </ul>
        <ul className='gnb_inner'>
          {
            gnbList.map( (el, idx)=>{
              return (
                <li key={idx}><NavLink to={el.linkTo} style={{textDecoration : 'none'}} >
                  {el.content}
                </NavLink></li>
              )
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}
