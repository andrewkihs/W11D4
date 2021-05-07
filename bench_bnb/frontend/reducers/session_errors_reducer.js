import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

// const emptyState = {
//   currentUser: null,
// };

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state);
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
};
