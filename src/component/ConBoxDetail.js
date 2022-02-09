import React from 'react'

function ConBoxDetail({data}) {
  return (
    <li className='con_content_part'>
      <h3 className='blind'>{data.detail}</h3>
      <img src={data.img} alt={data.narr} />
    </li>
  )
}

export default ConBoxDetail