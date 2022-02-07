import React from 'react';

function conBoxContent({list}) {
  return <div className="con_content_inner">

    <ul class="con_content_part">
        { list.products.map((card,idx)=> <li key={idx} data={card}></li>)}
      </ul>
  </div>
}

export default conBoxContent;
