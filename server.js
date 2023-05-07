// index.js
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");



const app = express();





const cheerio = require("cheerio");
const axios = require("axios");

async function performScraping() {
  // downloading the target web page
  // by performing an HTTP GET request in Axios
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://www.producthunt.com/posts/ai2006",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  // parsing the HTML source of the target web page with Cheerio
  const $ = cheerio.load(axiosResponse.data);
  // initializing the data structures
  // that will contain the scraped data

  const ImgURL = $(".styles_mediaThumbnail__LDCQN").attr("src");
  const titleName = $("h1").text();
  const highlightName = $("h2").text();
  const descriptionName = $(
    ".styles_htmlText__d6xln, .color-darker-grey fontSize-16 fontWeight-400"
  ).text();

  const tagList = [];
  $(".styles_reset__opz7w").each((index, element) => {
    const tagVal = $(element).find("span").text();
    if (tagVal) {
      tagList.push(tagVal);
    }
  });

{/* <div class="styles_htmlText__d6xln styles_format__w0VVk color-lighter-grey fontSize-16 fontWeight-400 styles_commentBody__e5V1S"></div> */}
//   const commentList= [];

//   $(".styles_commentBody__e5V1S").each((index,element)=>{
//     const commentVal = $(element).text();
//     if(commentVal)
//     {
//         commentList.push(commentVal);
//         console.log(commentVal);
//     }
  
//   })

//   console.log(commentList);
 
{/* <div class="styles_htmlText__d6xln styles_format__w0VVk color-lighter-grey fontSize-16 fontWeight-400 styles_commentBody__e5V1S"></div> */}
//   trasforming the scraped data into a general object
  const scrapedData = {
  ImgURL: ImgURL,
  Title: titleName,
  Highlights: highlightName,
  Description: descriptionName,
  Taglist: tagList
  }

//   converting the scraped data object to JSON
// console.log(scrapedData);
// const jsonVal=JSON.stringify(scrapedData);

//   const scrapedDataJSON = JSON.stringify(scrapedData)
app.get("/api/data", function(req,res)
{
  res.json(scrapedData);
})
//   storing scrapedDataJSON in a database via an API call...
}

performScraping();




app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/src/index.js");
});



app.listen(8000,function(req,res)
{
  console.log("Server is running on port 8000");
})