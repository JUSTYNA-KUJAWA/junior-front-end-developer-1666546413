import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCompleteds } from "../../Redux/completedRedux";
import styles from "./Completed.module.scss";
import clsx from "clsx";

const Completed = () => {
  const completeds = useSelector((completeds) => getAllCompleteds(completeds));

  return (
    <div className={styles.root}>
      {completeds.map((item) => (
        <Link
          key={item.id}
          to={"/completed/" + item.id}
          className={styles.listLink}
        >
          <img alt={item.alt} src={item.img} />
          <p>{item.name}</p>
          <p>{item.description}</p>

          <div
            className={clsx(
              item.banner === "small" ? styles.bannerSmall : styles.bannerLarge
            )}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default Completed;
