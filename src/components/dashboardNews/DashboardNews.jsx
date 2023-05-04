import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "../newsCard/NewsCard";
import { Link } from "react-router-dom";

export default function DashboardNews() {
  let [news, setNews] = useState([]);
  let newsCount = 0;

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

  const showMoreButton = () => {
    if (newsCount === 6) {
      return (
        <div
          className="news-app-button"
          style={{ position: "relative", bottom: "100px", right: "20px" }}
        >
          <Link className="nav-link" to="news">
            News{" "}
          </Link>
        </div>
      );
    }
  };

  const dashboardNewsContent = () => {
    news.map((articles) => {
      newsCount += 1;
      if (newsCount <= 5) {
        return (
          <div class="dashboard-news">
            <NewsCard
              urlToImage={articles.urlToImage}
              author={articles.author}
              title={articles.title}
              url={articles.url}
              description={articles.description}
            />
            {newsCount} ? (
            <div className="col-md-6 col-xs-12">
              <Link className="nav-link" to="news">
                News{" "}
              </Link>
            </div>
            ) ? <></>
          </div>
        );
      }
    });
  };

  // console.log(dashboardNewsContent);

  return (
    <div className="row border p-5">
      <div className="m-auto pb-5">
        <u className="component-title">
          Read some latest articles for Air Pollution
        </u>
      </div>
      {news.map((articles) => {
        newsCount += 1;
        if (newsCount <= 5) {
          return (
            <div class="dashboard-news">
              <NewsCard
                urlToImage={articles.urlToImage}
                author={articles.author}
                title={articles.title}
                url={articles.url}
                description={articles.description}
              />
              {showMoreButton()}
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}
