import React, { useEffect, useState } from 'react'
// import Good from './Good';
import "./Child.css"
import axios from "axios"
import Oll from './Oll';
function Child() {
    const [datas, setDatas] = useState ([]);
     
    const URL = "https://jsonplaceholder.typicode.com/posts "
    useEffect(()=>{
        axios
        .get(URL)
        .then((res) => setDatas(res.data))
        .catch((err) =>  console.log(err.message))
    }, []);
    
  return (
    <div className='Good'>
        <h1>Maxsulot</h1>
        {datas.length > 0 ?(
     <div className="oll_goods">
        {datas.map((item) => (
            <Oll key={item.id} {...item} />
        ))}
     </div>
        ) :(
            <h2>Load</h2>
        )}
    </div>
  )
}

export default Child