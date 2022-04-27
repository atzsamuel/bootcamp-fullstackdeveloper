import React, { useState, useEffect } from "react";
import Description from "./Description";

const FetchRandomUser = () => {
  const [user, setUser] = useState([]);
  const [userrandom, setUserrandom] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
    setUserrandom(data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const reset = () => {
    //const ruser = user[0];
    const num = Math.floor(Math.random() * 9 + 0);
    setUserrandom(user[num]);
  };

  return (
    <>
      <Description />
      <h1>Fetch Random User</h1>
      <button onClick={reset}>Reset</button>
      <h4>User: {userrandom.name}</h4>
      <h4>Website: {userrandom.website}</h4>
      <h4>Email: {userrandom.email}</h4>
      <h4>Phone: {userrandom.phone}</h4>
      {/*
      {user.map((user) => {
        return (
          <div>
            <h4>User: {user.id}</h4>
          </div>
        );
      })}
       */}
    </>
  );
};

export default FetchRandomUser;
