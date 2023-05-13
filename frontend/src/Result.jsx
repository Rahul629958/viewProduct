import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import NavBar from "./Navbar";
import axios from "axios";





//result function started
function Result(props) {
  // const [response,setResponse]= useState({});
  const [title,setTitle]= useState("Please wait...");
  const [imgURL,setImg]= useState("https://i.gifer.com/ZZ5H.gif");
  const [highlight,setHighlight]= useState("");
  const [description,setDescription]= useState("");
  const [tags,setTags]= useState([". . . ."]);
  const [link,setLink]= useState("");

 
  const fetchData= async()=>
  {
   const {data} = await axios.get("http://localhost:8000");
   setTitle(data.Title);
   setImg(data.ImgURL);
   setHighlight(data.Highlights);
   setDescription(data.Description);
  data.Taglist&& setTags(data.Taglist);
  setLink(data.link);

  console.log(data.Response);

  }
  useEffect(()=>
  {
    setTimeout(fetchData, 2000);
  },[]);



  return (
    <React.StrictMode>
      <NavBar func={props.func} />
      <div className="resultBox">
        <div className="container productBox">
          <img className="productIcon" src={imgURL}  />
          <span className="productTitle" onClick={(e)=>{window.open(link, '_blank', 'width=800,height=600')}}>{title}</span>
          <p className="productHighlight">{highlight}</p>
          <p className="productDescription">{description}</p>
          <br/>
          <span className="productTag">Tags : </span>
          {tags.map((e) => (
            <span className="productTagItem" key={e}>{e}</span>
          ))}
          <br />
          <br />
          <hr />
          <a href={link} target="_blank" className="knowMoreLink">Know more about this product...</a>
        
        </div>
      </div>
  
    </React.StrictMode>
  );
}

export default Result;


