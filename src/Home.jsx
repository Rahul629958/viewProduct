import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SiteIcon from "./SiteIcon"


function Home(props) {
  




  return (
    <React.StrictMode>
    <SiteIcon/>
      <div className="container homebox">
        <h1 className="heading">SEARCH FOR THE PRODUCTS</h1>
        <input className="form-control inputText" type="text" placeholder="Paste your producthunt link here."/>
        <br />
        <input className="inputCheck" type="checkbox" id="suggestion" name="suggestion" />

        <span className = "inputCheck"> View suggestion</span>
        <br />
        <button className="btn btn-info" onClick={e=>props.func(false)}> view Details</button>
      </div>
    </React.StrictMode>
  );
}
export default Home;
