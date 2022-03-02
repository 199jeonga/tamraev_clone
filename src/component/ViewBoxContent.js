import React from "react";

function ViewBoxContent(data) {
  const dataObj = data.data;
  // console.log(dataObj.id);
  return (
    <li
      style={{
        // backgroundImage: `url(./img/main_slider_1.jpg)`,
        backgroundImage: `url(${dataObj.src})`,
      }}
    >
      <span className="blind">{dataObj.alt}</span>
    </li>
  );
}

export default ViewBoxContent;
