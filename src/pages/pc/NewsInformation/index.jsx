// 新闻资讯
import React from "react";
import NewsContext from "./NewsContext";
import NewsVideo from "./NewsVideo";
import './newsInformation.scss';

const NewsInformation = () => {
  return (
    <div className="newsContainer">
      <header>
        <img
          title=""
          src="∂"
        />
      </header>
      <section className="newsContent">
        {/* 内容 */}
        <NewsContext />
        {/* 新闻视频 */}
        <NewsVideo />
      </section>
    </div>
  )
}

export default NewsInformation