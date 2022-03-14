import React from "react";

function ViewBoxContent(data) {
  const dataObj = data.data;
  // console.log(dataObj.src);
  return <span className="blind">{dataObj.alt}</span>;
}

export default ViewBoxContent;
