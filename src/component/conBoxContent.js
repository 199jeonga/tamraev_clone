import React from 'react';
import ConBoxDetail from './ConBoxDetail';

function ConBoxContent({data}) {
  return (
  <ul className="con_content_inner">
      {data.details.map((data,i)=> <ConBoxDetail key={i} data={data} />)}
  </ul>
  )
}

export default ConBoxContent;
