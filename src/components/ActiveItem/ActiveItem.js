import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Button from "../Button/Button";
import clsx from "clsx";
import { getActivesCardsById } from "../../Redux/activeCardsRedux";
import { removeActive } from "../../Redux/activeRedux";
import styles from "./ActiveItem.module.scss";

const ActiveItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const activeCard = useSelector((state) => getActivesCardsById(state, id));
  const noActiveItem = () => {
    dispatch(removeActive(id));
    navigate("/Active");
  };
  return (
    <div className={styles.root}>
      <h1>All Tasks to do</h1>
      <div className={styles.card}>
        <p>Title: {activeCard.title}</p>
        <p>Content: {activeCard.content}</p>
        <p>Author: {activeCard.author}</p>
        <p>Created: {activeCard.created_at}</p>
      </div>
      <Button
        onClick={noActiveItem}
        className={clsx(styles.button, activeCard.isActive && styles.isActive)}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ActiveItem;
