import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Navbar";
//open AI configuration
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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",
// });



//result function started
function Result(props) {



  //open AI API test function
  // const openai = new OpenAIApi(configuration);
  // const response = openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   temperature: 0,
  //   max_tokens: 7,
  // });

  // console.log(response);


  //example test case of a product.
  const title = "Currl";
  const imgURL =
    "https://ph-files.imgix.net/127a103f-c29a-472a-a32d-a53b1fb6e511.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&bg=0fff&dpr=1";
  const description =
    "Currl is a free text-based social bookmarking website. You can collect the links you love from around the web, you can also store them privately or share them publicly with your followers.";
  const highlight = "A free text-based social bookmarking website";
  const tags = ["Social Media", "bookmarking"];
  const comments = ["first comment", "second comment"];

  // const titleRating, highlightRating,descriptionRating,tagsRating;
  // const titleSuggestion,highlightSuggestion, descriptionSuggestion, tagsSuggesting;

  return (
    <React.StrictMode>
      <NavBar func={props.func} />
      <div className="resultBox">
        <div className="container productBox">
          <img className="productIcon" src={imgURL} />
          <span className="productTitle">{title}</span>
          <p className="productHighlight">{highlight}</p>
          <p className="productDescription">{description}</p>
          <span className="productTag">Tags : </span>
          {tags.map((e) => (
            <span className="productTagItem">{e}</span>
          ))}
          <br />
          <br />
          <hr />
          <p className="comment"> Comments : </p>
          {comments.map((e) => (
            <p className="commentItem">- {e}</p>
          ))}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Result;
