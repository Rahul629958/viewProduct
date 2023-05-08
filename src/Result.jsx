import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import NavBar from "./Navbar";
import axios from "axios";


//open AI configuration
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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",
// });



//result function started
function Result(props) {

  const [title,setTitle]= useState("Please wait...");
  const [imgURL,setImg]= useState("https://i.gifer.com/ZZ5H.gif");
  const [highlight,setHighlight]= useState("");
  const [description,setDescription]= useState("");
  const [tags,setTags]= useState([". . . ."]);
  const [link,setLink]= useState("");
 
  const fetchData= async()=>
  {
   const {data} = await axios.get("/api/data");
   setTitle(data.Title);
   setImg(data.ImgURL);
   setHighlight(data.Highlights);
   setDescription(data.Description);
  data.Taglist&& setTags(data.Taglist);
  setLink(data.link);
  }
  
  
  useEffect(()=>
  {
    // fetchData();
    setTimeout(fetchData, 1000);
  },[]);




  //open AI API test function
  // const openai = new OpenAIApi(configuration);
  // const response = openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   temperature: 0,
  //   max_tokens: 7,
  // });

  // console.log(response);

  return (
    <React.StrictMode>
      <NavBar func={props.func} />
      <div className="resultBox">
        <div className="container productBox">
          <img className="productIcon" src={imgURL}  />
           {/*<video class="productIcon"  controls> <source src={vidURL} /></video>} */}
          {/* <img className="productIcon" src={imgURL}  /> */}
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
          {/* <p className="comment"> Comments : </p>
          {comments.map((e) => (
            <p className="commentItem">- {e}</p>
          ))} */}
        </div>
      </div>
  
    </React.StrictMode>
  );
}

export default Result;


