import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineSearch,AiOutlinePlus } from 'react-icons/ai';
import '../style/conBox.scss';


export default function ConBox() {

  const [conData, setconData] = useState([]);
  
  useEffect( ()=>{
    axios.get('./data/conList.json')
    .then(res => setconData(res.data))
  }, []);


  return (
    <div id="conBox">
      <h2>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h2>
      <div className="con_area">
        <ul className="con_title_inner">
          { conData.map( (data, idx)=>
          <li key={idx}>{data.conTitle}</li>
          ) }
          <li><Link to="/electroniclist">제주 전기차 충전소 찾기</Link></li>
          <li><Link to="/noticelist">제주 전기차 뉴스</Link></li>
          <li><button type="button"><AiOutlineSearch />검색</button></li>
        </ul>
        <div className="con_content_inner">
          <ul class="con_content_part">
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
          </ul>
        </div>{/* con_content_inner */}
        <div className="more_btn"><button type="button"><AiOutlinePlus /></button></div>
      </div>
    </div>
  )
}
