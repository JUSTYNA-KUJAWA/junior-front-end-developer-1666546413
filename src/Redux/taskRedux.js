//action
const createActionName = (actionName) => `app/columns/${actionName}`;
const TOGGLE_TASK_ACTIVE = createActionName("TOGGLE_TASK_ACTIVE");

//selectors
export const getAllTasks = (state) => state.tasks;
export const getTasksByCategory = ({ tasks }, listId) =>
  tasks.filter((task) => task.listId === listId);

//action creators

export const toggleTaskActive = (payload) => ({
  type: TOGGLE_TASK_ACTIVE,
  payload,
});

const tasksReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_TASK_ACTIVE:
      return statePart.map((task) =>
        task.id === action.payload
          ? { ...task, isActive: !task.isActive }
          : task
      );
    default:
      return statePart;
  }
};
export default tasksReducer;
