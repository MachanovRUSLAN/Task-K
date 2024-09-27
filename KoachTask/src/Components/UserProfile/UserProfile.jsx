import React from "react";
import "./userProfile.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";


function UserProfile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((Data) => {
          setData(Data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="user-profiles">
      {loading ? (
        <div className="load">
          <CircularProgress />
        </div>
      ) : error ? (
        <div className="error">
          <p>❌</p>
          <p>error</p>
        </div>
      ) : (
        data.map((item, index) => (
          <Link to={`/users/${item.id}`} key={index}>
            <div className="user-profile">
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default UserProfile;
