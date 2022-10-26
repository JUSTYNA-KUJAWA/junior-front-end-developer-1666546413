import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNews } from "../../Redux/newRedux";
import styles from "./New.module.scss";

const New = () => {
  const news = useSelector((news) => getAllNews(news));

  return (
    <div className={styles.root}>
      {news.map((item) => (
        <Link key={item.id} to={"/new/" + item.id} className={styles.listLink}>
          <img alt={item.alt} src={item.img} />
          <p>{item.name}</p>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default New;
