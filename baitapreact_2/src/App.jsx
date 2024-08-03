import React, { useState } from "react";
import "./assets/scss/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyWallet from "./assets/components/MyWallet";

const App = () => {
  return (
    <div className="App">
      <MyWallet />
    </div>
  );
};

export default App;
