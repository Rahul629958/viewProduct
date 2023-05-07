import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SiteIcon from "./SiteIcon"
import axios from "axios";

function Home(props) {
  const [link,setLink] = useState("");
  var handleSubmit= (e)=>
  {
    e.preventDefault();
    
  if(link){  const data = {link : link};
fetch('http://localhost:8000/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

props.func(false);} else {alert("Enter correct product link.")}
  }


  return (
    <React.StrictMode>
    <SiteIcon/>
      <div className="container homebox">
        <h1 className="heading">SEARCH FOR THE PRODUCTS</h1>
        <form method="post" action="http://localhost:8000/" onSubmit={handleSubmit} >
       <input className="form-control inputText" type="text" placeholder="Paste your producthunt link here." onChange={e=>(setLink(e.target.value))} value={link} />
        <br />
        <input className="inputCheck" type="checkbox" id="suggestion" name="suggestion" />

        <span className = "inputCheck"> View suggestion</span>
        <br />
        <button className="btn btn-info" type="submit" onClick={handleSubmit}> view Details</button>
        </form>

      </div>
    </React.StrictMode>
  );
}
export default Home;
