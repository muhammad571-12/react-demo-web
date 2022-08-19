import React from 'react'
import "./Good.css"
function Good(item) {
    const {id, title,image,description,prince,category } = item;
  return (
    <div className='goods'>
        <img src={image} alt="" />
        <p> <span>Nomi:</span> {title}$</p>
        <p><span>Narxi:</span> {prince}</p>
        <p><span>Kategoty:</span> {category}</p>
    </div>
  )
}

export default Good