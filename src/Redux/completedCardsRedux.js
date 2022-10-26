import shortid from "shortid";

//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COMPLETED_CARDS = createActionName("ADD_COMPLETED_CARDS");

//selectors
export const getAllCompletedsCards = ({ completedsCards }) => completedsCards;
export const getCompletedsCardsById = ({ completedsCards }, completedCardId) =>
  completedsCards.find((completedCard) => completedCard.id === completedCardId);
//action creators
export const addCompletedCards = (payload) => ({
  type: ADD_COMPLETED_CARDS,
  payload,
});

const completedsCardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COMPLETED_CARDS:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default completedsCardsReducer;
