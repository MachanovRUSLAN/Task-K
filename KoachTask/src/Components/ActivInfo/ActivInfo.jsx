import React, { useEffect, useState } from "react";
import "./ActivInfo.css";
import { useParams } from "react-router";

function ActivInfo() {
  const [info, setInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/activities/${id}`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, [id]);

  return (
    <div className="activ-info">
      {info && (
        <div className="info-cart" key={id}>
          <div className="img-box">
            <img src={info.img} alt="" />
          </div>
          <h2>{info.title}</h2>
        </div>
      )}
    </div>
  );
}

export default ActivInfo;
