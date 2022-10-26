import shortid from "shortid";

//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_NEW_CARD = createActionName("ADD_NEW_CARD");

//selectors
export const getAllNewsCards = ({ newsCards }) => newsCards;
export const getNewsCardsById = ({ newsCards }, newCardId) =>
  newsCards.find((newCard) => newCard.id === newCardId);
//action creators
export const addNewCards = (payload) => ({ type: ADD_NEW_CARD, payload });

const newsCardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};
export default newsCardsReducer;
