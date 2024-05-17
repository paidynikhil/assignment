import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import "./itemList.css";

const API = "http://localhost:5000/items";
const POLL_INTERVAL = 5000; // Fetch data every 5 seconds

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const ItemList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!deepEqual(users, data)) {
        setUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
    const interval = setInterval(() => fetchUsers(API), POLL_INTERVAL);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [users]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default ItemList;
