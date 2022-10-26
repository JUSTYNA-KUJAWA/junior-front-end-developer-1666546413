import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Button from "../Button/Button";
import clsx from "clsx";
import { getNewsCardsById } from "../../Redux/newCardsRedux";
import { removefromNew } from "../../Redux/newRedux";
import styles from "./NewItem.module.scss";

const NewItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const newCard = useSelector((state) => getNewsCardsById(state, id));

  const removeItem = () => {
    dispatch(removefromNew(id));
    navigate("/New");
  };
  return (
    <div className={styles.root}>
      <h1>All Tasks to do</h1>
      <div className={styles.card}>
        <p>Title: {newCard.title}</p>
        <p>Content: {newCard.content}</p>
        <p>Author: {newCard.author}</p>
        <p>Created: {newCard.created_at}</p>
      </div>
      <Button
        onClick={removeItem}
        className={clsx(styles.button, newCard.isActive && styles.isActive)}
      >
        Go Back
      </Button>
    </div>
  );
};

export default NewItem;
