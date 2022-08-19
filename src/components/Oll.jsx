import React from 'react'
import "./Oll.css"
function Oll(item) {
    const {id,title,body} =item;
  return (
    <div className='Olls'>
        <p>Id: {id}</p>
        <p>title: {title}</p>
        <p>Id: {body}</p>
    </div>
  )
}

export default Oll