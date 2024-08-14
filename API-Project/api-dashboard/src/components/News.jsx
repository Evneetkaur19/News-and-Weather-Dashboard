import React, { useEffect, useState } from 'react'
import "./News.css"
const News = () => {
    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=43070255018a4ca182f020c625704f85")
        let data = await response.json();
        setMyNews(data.articles)
    }
    useEffect(() => {
        fetchData()
    },[])

  return (
    <>
     <div className="mainDiv">
    {mynews.map((ele) => {
            console.log(ele)
            return (
                <>
               <div class="card" style={{ width:"400px", height: "400px", marginLeft: "5rem" , marginTop: "3rem"}}>
                <img src={ele.urlToImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{ele.author}</h5>
                <p class="card-text">
                    {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">Read More</a>
                </div>
                </div>
                </>
            );
        })}
        </div>
    </>
  )
}

export default News
