import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Task.module.scss";

const Task = (props) => {
  return (
    <div className={styles.element}>
      <Link to={`/category/${props.category}`}>
        <img alt={props.alt} src={props.img} />
        <div
          className={clsx(
            props.banner === "small" ? styles.bannerSmall : styles.bannerLarge
          )}
        >
          <p>{props.line}</p>
        </div>
      </Link>
    </div>
  );
};

Task.propTypes = {
  category: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default Task;
