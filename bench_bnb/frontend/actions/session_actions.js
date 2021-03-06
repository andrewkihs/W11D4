import { signupUser, loginUser, logoutUser } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

//action creator

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

// thunks
export const signup = (formUser) => (dispatch) =>
  signupUser(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = (formUser) => (dispatch) =>
  loginUser(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => (dispatch) =>
  logoutUser().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
