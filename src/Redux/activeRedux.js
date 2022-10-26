//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_ACTIVE = createActionName("ADD_ACTIVE");

//selectors
export const getAllActives = ({ actives }) => actives;

//action creators
export const removeActive = (payload) => ({ type: ADD_ACTIVE, payload });

const activesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ACTIVE:
      return statePart.map((active) =>
        active.id === action.payload
          ? { ...active, isActive: !active.isActive }
          : active
      );
    default:
      return statePart;
  }
};
export default activesReducer;
