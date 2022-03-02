import React from "react";
import ConBoxDetail from "./ConBoxDetail";

function ConBoxContent({ data, plus }) {
  const viewData = data.details.filter((el, index) => index < plus);
  console.log(viewData);

  return (
    <ul className="con_content_inner">
      {viewData.map((data, i) => (
        <ConBoxDetail key={i} data={data} />
      ))}
    </ul>
  );
}

export default ConBoxContent;
