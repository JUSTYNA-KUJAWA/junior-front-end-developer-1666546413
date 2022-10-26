import { createStore, combineReducers } from "redux";
import initialState from "./initialState.js";
import newsReducer from "./newRedux";
import activesReducer from "./activeRedux";
import blockedsReducer from "./blockedRedux";
import completedsReducer from "./completedRedux";
import completedsCardsReducer from "./completedCardsRedux";
import newsCardsReducer from "./newCardsRedux";
import activesCardsReducer from "./activeCardsRedux";

const subreducers = {
  news: newsReducer,
  actives: activesReducer,
  blockeds: blockedsReducer,
  completeds: completedsReducer,
  newsCards: newsCardsReducer,
  activesCards: activesCardsReducer,
  completedsCards: completedsCardsReducer,
};
const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
