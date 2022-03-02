import React from "react";

function ViewBoxContent(data) {
  const dataObj = data.data;
  // console.log(dataObj.id);
  return (
    <li className="active">
      <img src={dataObj.src} alt={dataObj.alt}></img>
    </li>
  );
}

export default ViewBoxContent;
