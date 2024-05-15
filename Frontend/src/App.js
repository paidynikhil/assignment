// src/App.js
import React from "react";
import ItemList from "./components/ItemList";
import "./App.css";
//import ItemList2 from "./components/axios/ItemList2";


const App = () => {
  return (
    <div className="App">
      {/* ----------------using promises --------------*/}
      <ItemList />
      {/* ---------------------- using axios ------------------- */}
      {/* <ItemList2/> */}
    </div>
  );
};

export default App;
