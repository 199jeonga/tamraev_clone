import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function ConDetail() {
  const [conData, setconData] = useState([]);
  
  useEffect( ()=>{
    axios.get('./data/conList.json')
    .then(res => setconData(res.data))
  }, []);

  return (
    <ul className="con_title_inner">
    { conData.map( (data, idx)=>
    <li key={idx}>{data.conTitle}</li>
    ) }
    <li></li>
  </ul>
  )
}
