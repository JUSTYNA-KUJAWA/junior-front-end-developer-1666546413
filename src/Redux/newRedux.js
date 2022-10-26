//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const REMOVE_FROM_CART = createActionName("REMOVE_FROM_CART");

//selectors
export const getAllNews = ({ news }) => news;
export const getNewById = ({ news }, nowyId) =>
  news.find((nowy) => nowy.id === nowyId);
//action creators

export const removefromNew = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
const newsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return statePart.filter((nowyId) => nowyId.id !== action.payload);
    default:
      return statePart;
  }
};
export default newsReducer;
