import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "../newsCard/NewsCard";

export default function NewsApp() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=air%20pollution&apiKey=dff386e96b614c2aa91363757e0de4e7"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => {
        console.log("The error is", err);
      });
  }, []);
  return (
    <div className="row border p-5">
      <div className="component-title m-auto pb-5">
        Read some latest articles for Air Pollution
      </div>
      {news.map((articles) => (
        <NewsCard
          urlToImage={articles.urlToImage}
          author={articles.author}
          title={articles.title}
          url={articles.url}
          description={articles.description}
        />
      ))}
    </div>
  );
}
