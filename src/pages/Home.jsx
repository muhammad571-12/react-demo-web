import React, { useState, eseEffect, useEffect } from "react";
import axios from "axios";
import Good from "../components/Good";
import "./Home.css";

function Home() {
  const [datas, setDatas] = useState([]);

  const URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>Jami Maxsulot</h1>
      {datas.length > 0 ? (
        <div className="all_goods">
          {datas.map((item) => (
            <Good key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}

export default Home;
