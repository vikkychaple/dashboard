
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({ author: "", type: "", dateRange: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=tech&apiKey=AIzaSyB6Sg6w6M-VounUDO2KHMk-uXNqpUeWFMY")
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error(error));
  }, []);

  const handleFilter = () => {
   
  };

  return (
    <div className="news-container">
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="filters">
        <input type="text" placeholder="Author" onChange={(e) => setFilters({ ...filters, author: e.target.value })} />
        <input type="date" onChange={(e) => setFilters({ ...filters, dateRange: [e.target.value] })} />
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">All</option>
          <option value="news">News</option>
          <option value="blog">Blog</option>
        </select>
        <button onClick={handleFilter}>Apply Filters</button>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>{moment(article.publishedAt).format("MMM DD, YYYY")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
