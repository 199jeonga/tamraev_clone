import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import "../style/conBox.scss";
import ConBoxContent from "./ConBoxContent.js";

export default function ConBox() {
  const plusN = 6;

  const [num, setNum] = useState(0);
  const [conData, setconData] = useState([]);
  const [plus, setPlus] = useState(6);

  useEffect(() => {
    axios.get("./data/conList.json").then((res) => setconData(res.data));
  }, []);

  const fnTab = (e, i) => {
    e.preventDefault();
    setNum(i);
  };
  const fnPlus = () => {
    setPlus(plus + plusN);
  };
  const code = conData.filter((data, index) => index === num);
  // console.log(code);

  return (
    <div id="conBox">
      <h2>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h2>
      <div className="con_area">
        <ul className="con_title_inner">
          {conData.map((data, idx) => (
            <li key={idx}>
              <button type="button" onClick={(e) => fnTab(e, idx)}>
                <span>{data.conTitle}</span>
              </button>
            </li>
          ))}
          <li>
            <Link to="/electroniclist">
              <span>제주 전기차 충전소 찾기</span>
            </Link>
          </li>
          <li>
            <Link to="/noticelist">
              <span>제주 전기차 뉴스</span>
            </Link>
          </li>
          <li className="search_btn">
            <button type="button">
              <AiOutlineSearch />
              검색
            </button>
          </li>
        </ul>
        <span className="underLine"></span>

        {code.map((data, idx) => (
          <ConBoxContent key={idx} data={data} plus={plus} />
        ))}

        <div className="more_btn">
          <button type="button" onClick={fnPlus}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
