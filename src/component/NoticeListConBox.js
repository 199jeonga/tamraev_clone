import React from 'react';
import '../style/total.scss';

function NoticeListConBox() {
  return (
  <div id="noticeListConBox">
    <div className="subTitle">
    <h2>JEJU 전기차 관련 소식</h2>
    <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
    </div>
    <div className='notice_con_area'>
      <table>
        <thead><th>No</th><th>제목</th><th>작성일</th><th>조회수</th></thead>
        <tbody>
          <tr><td>4</td><td>충전 에티켓 알아보기</td><td>2022.01.05</td><td>214</td></tr>
          <tr><td>3</td><td>제주도 고장난 충전기 신고하기 오픈</td><td>2022.01.04</td><td>204</td></tr>
          <tr><td>2</td><td>제주도 찾아가는 충전서비스 확대 운영</td><td>2022.01.03</td><td>194</td></tr>
          <tr><td>1</td><td>픽업앤충전 서비스 런칭 이벤트 안내</td><td>2022.01.02</td><td>184</td></tr>
          </tbody>
      </table>
    </div>
    <div className='notice_listbtn_area'>
      
    </div>
  </div>
  )
}

export default NoticeListConBox;
