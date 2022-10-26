import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllActives } from "../../Redux/activeRedux";
import styles from "./Active.module.scss";
import clsx from "clsx";

const Active = () => {
  const actives = useSelector((actives) => getAllActives(actives));

  return (
    <div className={styles.root}>
      {actives.map((item) => (
        <Link
          key={item.id}
          to={"/active/" + item.id}
          className={clsx(styles.listLink, item.isActive && styles.isActive)}
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

export default Active;
