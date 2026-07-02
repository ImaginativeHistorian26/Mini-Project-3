import React, { useEffect, useState } from "react";
import { YouTube } from "./YouTube";

function CommunityNewsBox() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setNews(data.news || []))
      .catch(() => setNews([]));
  }, []);

  return (
    <main>
      <div className="container my-4">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-6 community-news-container">
            <h2 className="display-1">Community News</h2>
            <div
              id="news-feed"
              className="news-parent-container row justify-content-around gap-5 text-center"
            >
              {news.map((item) => (
                <div key={item.id} className="news-container col-12 col-md-6">
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div
              className="ratio ratio-16x9"
              style={{ maxWidth: "560px", width: "100%" }}
            >
              <YouTube />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { CommunityNewsBox };