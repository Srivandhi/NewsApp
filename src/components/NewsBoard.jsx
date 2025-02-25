import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category})=>{
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5abee301a0cb4b58af8308e2daf8142d`;


var req = new Request(url);

    const [articles,setAriticles] = useState([]);
    useEffect(() => {
        fetch(req)
            .then(response => response.json())
            .then(data => {
                setAriticles(data.articles || []);
            });
    }, [category]);
    
    return(
        <>
            <h2 className="text-center">
                Latest<span className="badge bg-danger">News</span>
            </h2>
            {
                    articles.map((news,index)=>{
                        return <NewsItem key={index} title={news.title} description = {news.description} src = {news.urlToImage} url = {news.url}/>
                    })
                }
        </>
    )
}