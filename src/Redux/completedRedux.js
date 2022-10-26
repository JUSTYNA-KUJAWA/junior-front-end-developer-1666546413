import shortid from "shortid";

//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COMPLETED = createActionName("ADD_COMPLETED");

//selectors
export const getAllCompleteds = ({ completeds }) => completeds;
//action creators
export const addCompleted = (payload) => ({ type: ADD_COMPLETED, payload });

const completedsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COMPLETED:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default completedsReducer;
