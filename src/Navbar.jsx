
import React, { useState } from "react";




export default function Navbar(props)
{

  


    return (
      <div style={{zIndex:2}} className="navTop">
        <nav className="navbar navbar-expand-lg navbar-light "  style={{backgroundColor:"#54B4D3",opacity:0.9,position:"fixed",top:"0",width:"100%"}} >
          <img src="../2282259.png" style={{width:"5%" , marginLeft:"1rem"}}/>
  <a className="navbar-brand brandBtn" name="homeBtn" style={{color:"#00235B",fontWeight:"bold", fontSize:"30px", fontFamily:"cursive",marginLeft:"1rem"}}>viewProduct</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft:"20%"}}>
  {/* <form className="form-inline my-2 my-lg-0"> */}
        {/* </form> */}
    <ul className="navbar-nav mr-auto" style={{marginLeft:"70%"}}>
      <li className="nav-item">
        <a className="nav-link homeBtn" name="homeBtn" onClick={e=>props.func(true)} style={{color:"#ffffff"}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" name="contactBtn" href="mailto:rahulsoniubr@gmail.com" style={{color:"#ffffff"}}>Contact Us</a>
      </li>
      
    </ul>
   
  </div>
</nav>
</div>


    );
}