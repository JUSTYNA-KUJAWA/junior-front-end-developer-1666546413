import shortid from "shortid";

//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_BLOCKED = createActionName("ADD_BLOCKED ");

//selectors
export const getAllBlockeds = ({ blockeds }) => blockeds;
//action creators
export const addBlocked = (payload) => ({ type: ADD_BLOCKED, payload });

const blockedsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_BLOCKED:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default blockedsReducer;
