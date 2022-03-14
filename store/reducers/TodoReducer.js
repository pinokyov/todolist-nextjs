const INITIAL_DATA = [
  {
    id: 0,
    text: "Example to do.",
    description: "Example to do.",
    created_at:new Date().getTime(),
    completed: true
  },
];

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from "../actions/actionsTypes";

const TodoReducer = (state = INITIAL_DATA, action) => {
  const numIndex = parseInt(action.id);

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          description: action.description,
          created_at:new Date().getTime(),
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== numIndex);

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === numIndex ? { ...todo, text: action.text } : todo
      );

    default:
      return state;
  }
};

export default TodoReducer;
