import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './itemList2.css';

const API = 'http://localhost:5000/items'
const ItemList2 = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  //using promises
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setMyData(res.data);
      })
      .catch((err) => {
        setIsError(err.message);
    })
  }, [])
  //using async await
  const getApiData = async (url) => {
    try {
      const res = await axios.get(url);
      setMyData(res.data);
    } catch (err){
      setIsError(err.message);
    }
    
  }
  useEffect(() => {
    getApiData(`${API}`);
  },[])
  return (
    <>
      <h1 className='method'>Using Axios </h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.map((post) => {
          const { _id, name } = post;
          return (
            <div className="card" key={_id}>
              <h3>{_id}</h3>
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemList2
