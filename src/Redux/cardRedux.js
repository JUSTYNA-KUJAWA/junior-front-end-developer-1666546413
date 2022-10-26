//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const TOGGLE_CARD_ACTIVE = createActionName("TOGGLE_CARD_ACTIVE");

//selectors
export const getAllCards = (state) => state.cards;
export const getCardById = ({ cards }, cardId) =>
  cards.find((card) => card.id === cardId);

//action creators

export const toggleCardActive = (payload) => ({
  type: TOGGLE_CARD_ACTIVE,
  payload,
});
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_CARD_ACTIVE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isActive: !card.isActive }
          : card
      );
    default:
      return statePart;
  }
};
export default cardsReducer;
