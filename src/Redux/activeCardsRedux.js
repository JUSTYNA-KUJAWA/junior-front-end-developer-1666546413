import shortid from "shortid";

//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_ACTIVE_CARDS = createActionName("ADD_ACTIVE_CARDS");

//selectors
export const getAllActivesCards = ({ activesCards }) => activesCards;
export const getActivesCardsById = ({ activesCards }, activeCardId) =>
  activesCards.find((activeCard) => activeCard.id === activeCardId);

//action creators

export const addActiveCard = (payload) => ({ type: ADD_ACTIVE_CARDS, payload });

const activesCardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ACTIVE_CARDS:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default activesCardsReducer;
