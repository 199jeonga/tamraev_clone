import React from 'react';
import '../style/total.scss';
import '../style/noticeListConBox.scss';

function NoticeListConBox() {
  return (
  <div id="noticeListConBox">
    <div className="subTitle">
    <h2>JEJU 전기차 관련 소식</h2>
    <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
    </div>
    <div className='notice_con_area'>
      <table>
        <caption>전기차 관련 소식의 제목, 작성일, 조회수 안내</caption>
        <thead><tr>
          <th>No</th><th>제목</th><th>작성일</th><th>조회수</th>
        </tr></thead>
        <tbody>
          <tr><td>4</td><td className='table_title'>충전 에티켓 알아보기</td><td>2022.01.05</td><td>214</td></tr>
          <tr><td>3</td><td className='table_title'>제주도 고장난 충전기 신고하기 오픈</td><td>2022.01.04</td><td>204</td></tr>
          <tr><td>2</td><td className='table_title'>제주도 찾아가는 충전서비스 확대 운영</td><td>2022.01.03</td><td>194</td></tr>
          <tr><td>1</td><td className='table_title'>픽업앤충전 서비스 런칭 이벤트 안내</td><td>2022.01.02</td><td>184</td></tr>
          </tbody>
      </table>
    </div>
    <div className='notice_listbtn_area'>
      <button type="button" className='more_prev_btn'><span className='blind'>처음으로</span>처음으로</button>
      <button type="button" className='prev_btn'><span className='blind'>이전으로</span>이전으로</button>
      <ol className='page_btn'>
        <li>
          <button type="button"><span className='blind'>1</span>1</button>
        </li>
      </ol>
      <button type="button" className='next_btn'><span className='blind'>다음으로</span>다음으로</button>
      <button type="button" className='more_next_btn'><span className='blind'>맨끝으로</span>맨끝으로</button>
    </div>
  </div>
  )
}

export default NoticeListConBox;
