import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useParams } from "react-router";

function Profile() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="div">
      {data && (
        <div className="profile-card">
            <div className="image-profile">
                <img src={data.image} alt="" />
            </div>
          <h1>{data.name}</h1>
          <h2>{data.username}</h2>
          <p>{data.email}</p>
          <p>{data.title}</p>
          <p>{data.activities}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
